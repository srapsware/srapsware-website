# MySQL Data Directory Repair Script for XAMPP
# Based on: https://stackoverflow.com/a/61859561/1956278
# Author: Srapsware
# Date: January 7, 2026
# Description: Repairs corrupted MySQL data directory by backing up old data,
#              restoring fresh system databases, and migrating custom databases

# Requires: Administrator privileges, MySQL service stopped

#Requires -RunAsAdministrator

# Configuration
$xamppPath = "C:\xampp\mysql"

# Display banner
Write-Host "`n=============================================" -ForegroundColor Cyan
Write-Host " MySQL Data Directory Repair Script" -ForegroundColor White
Write-Host " For XAMPP on Windows" -ForegroundColor White
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Check if MySQL directory exists
if (-not (Test-Path $xamppPath)) {
    Write-Host "[X] ERROR: XAMPP MySQL directory not found at: $xamppPath" -ForegroundColor Red
    Write-Host "    Please edit the script and update `$xamppPath variable." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

# Navigate to MySQL directory
Set-Location $xamppPath
Write-Host "Working directory: $xamppPath`n" -ForegroundColor Gray

# Warning prompt
Write-Host "[!] WARNING: This will replace your MySQL data directory!" -ForegroundColor Yellow
Write-Host "    - Current data will be backed up to ./data_old" -ForegroundColor Yellow
Write-Host "    - System databases will be restored from backup" -ForegroundColor Yellow
Write-Host "    - Your custom databases will be migrated" -ForegroundColor Yellow
Write-Host ""
$confirm = Read-Host "Continue? (yes/no)"

if ($confirm -ne "yes") {
    Write-Host "`nOperation cancelled by user.`n" -ForegroundColor Yellow
    exit 0
}

Write-Host ""

# Phase 1: Backup old data directory
Write-Host "[1/4] Backing up corrupted data directory..." -ForegroundColor Yellow

if (Test-Path "./data") {
    # Check if data_old already exists
    if (Test-Path "./data_old") {
        Write-Host "    [!] data_old already exists. Renaming to data_old_backup..." -ForegroundColor DarkYellow
        $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
        Rename-Item -Path "./data_old" -NewName "./data_old_backup_$timestamp" -Force
    }
    
    try {
        Rename-Item -Path "./data" -NewName "./data_old" -Force -ErrorAction Stop
        Write-Host "    [OK] Backed up to ./data_old" -ForegroundColor Green
    } catch {
        Write-Host "    [X] Failed to backup data directory: $_" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "    [X] No data directory found!" -ForegroundColor Red
    Write-Host "    Expected location: $xamppPath\data" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Phase 2: Create new data directory from backup
Write-Host "[2/4] Creating fresh data directory from backup..." -ForegroundColor Yellow

if (Test-Path "./backup") {
    try {
        Copy-Item -Path "./backup" -Destination "./data" -Recurse -Force -ErrorAction Stop
        Write-Host "    [OK] Fresh data directory created from backup" -ForegroundColor Green
    } catch {
        Write-Host "    [X] Failed to create data directory: $_" -ForegroundColor Red
        Write-Host "    Restoring original data directory..." -ForegroundColor Yellow
        Rename-Item -Path "./data_old" -NewName "./data" -Force
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "    [X] Backup folder not found at: $xamppPath\backup" -ForegroundColor Red
    Write-Host "    Cannot proceed without backup. Restoring original..." -ForegroundColor Yellow
    Rename-Item -Path "./data_old" -NewName "./data" -Force
    Write-Host ""
    Write-Host "    Solution: Reinstall XAMPP or download backup folder" -ForegroundColor Cyan
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Phase 3: Clean test database and restore custom databases
Write-Host "[3/4] Removing test database and restoring your databases..." -ForegroundColor Yellow

# Remove the default test database (not needed)
if (Test-Path "./data/test") {
    Remove-Item "./data/test" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "    [OK] Removed test database" -ForegroundColor Gray
}

# Get all user databases (excluding system databases)
$systemDatabases = @('mysql', 'performance_schema', 'phpmyadmin')
$dbPaths = Get-ChildItem -Path "./data_old" -Directory | 
    Where-Object { $systemDatabases -notcontains $_.Name }

if ($dbPaths.Count -eq 0) {
    Write-Host "    [i] No custom databases found in data_old" -ForegroundColor DarkGray
} else {
    Write-Host "    Found $($dbPaths.Count) custom database(s) to restore:" -ForegroundColor Gray
    
    # Copy each custom database to new data directory
    foreach ($db in $dbPaths) {
        try {
            Copy-Item -Path $db.FullName -Destination "./data" -Recurse -Force -ErrorAction Stop
            Write-Host "      [OK] $($db.Name)" -ForegroundColor Green
        } catch {
            Write-Host "      [X] Failed to restore $($db.Name): $_" -ForegroundColor Red
        }
    }
}

Write-Host ""

# Phase 4: Use fresh InnoDB files (don't restore old corrupted ones)
Write-Host "[4/4] Verifying InnoDB system files..." -ForegroundColor Yellow

# DO NOT copy old ibdata1, ib_logfile0, ib_logfile1 as they can be corrupted
# The fresh backup already has clean InnoDB files
# MySQL will automatically initialize them on first start

$innodbFiles = @('ibdata1', 'ib_logfile0', 'ib_logfile1')
$foundFiles = 0

foreach ($file in $innodbFiles) {
    if (Test-Path "./data/$file") {
        Write-Host "    [OK] Fresh $file ready" -ForegroundColor Green
        $foundFiles++
    }
}

if ($foundFiles -eq 3) {
    Write-Host "    [OK] All InnoDB files are fresh and clean" -ForegroundColor Green
} else {
    Write-Host "    [!] Some InnoDB files missing - MySQL will recreate them" -ForegroundColor DarkYellow
}

Write-Host ""

# Final summary
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host " [OK] MySQL Data Directory Repair Complete!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor White
Write-Host "  1. Start MySQL from XAMPP Control Panel" -ForegroundColor Cyan
Write-Host "  2. Verify databases in phpMyAdmin (http://localhost/phpmyadmin)" -ForegroundColor Cyan
Write-Host "  3. Test your applications" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backup Information:" -ForegroundColor White
Write-Host "  - Previous data saved at: $xamppPath\data_old" -ForegroundColor Gray
Write-Host "  - You can safely delete data_old after verification" -ForegroundColor Gray
Write-Host ""
Write-Host "Troubleshooting:" -ForegroundColor White
Write-Host "  - If MySQL will not start, check error logs in data folder" -ForegroundColor Gray
Write-Host "  - For permission issues, run XAMPP as Administrator" -ForegroundColor Gray
Write-Host "  - If databases are missing, check data_old folder" -ForegroundColor Gray
Write-Host ""

Read-Host "Press Enter to exit"
