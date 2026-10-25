---
title: Planning a dependable integration
description: Questions to answer before connecting two business systems.
sections:
  - title: Name the source of truth
    text: >-
      For each field, decide which system owns it. Document identifiers and update direction. Avoid allowing
      both systems to overwrite the same value without an explicit conflict-resolution rule.
  - title: Design for delayed and repeated events
    text: >-
      Networks fail and events may arrive more than once. Define idempotency keys, retry limits,
      reconciliation jobs and a way to inspect unsuccessful transfers. Decide whether ordering matters for
      each event type.
  - title: Set a security boundary
    text: >-
      Use scoped credentials, protected secret storage and verified webhook signatures where supported. Define
      who can access transferred data. Minimize the fields sent and establish a process for credential
      rotation.
  - title: Agree on service behavior
    text: >-
      Understand rate limits, pagination, timeouts and vendor maintenance windows. Decide what users see when
      the upstream system is unavailable. Cache only where stale data is acceptable and clearly understood.
  - title: Test changes safely
    text: >-
      Use sandbox environments and representative anonymized records. Test malformed payloads and schema
      changes. Version contracts where possible and document the owner on each side of the integration.
draft: false
---


