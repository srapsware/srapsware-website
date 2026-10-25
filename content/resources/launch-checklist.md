---
title: Before your next software release
description: A checklist for preparing a release, its users and its support team.
sections:
  - title: Prove the core journeys
    text: >-
      Test the actions your users rely on, including validation errors and interrupted requests. Check
      keyboard use, small screens and supported browsers. Ensure loading and empty states make sense and that
      failure messages offer a next step.
  - title: Prepare the environment
    text: >-
      Confirm required configuration, access controls, backups and restoration procedures. Keep secrets out of
      source control. Verify certificates, domains, redirects and production integrations using approved test
      accounts.
  - title: Make delivery observable
    text: >-
      Record application errors without collecting unnecessary personal data. Identify who responds to alerts.
      Verify that important transactions can be traced safely and that your team can distinguish a failed
      request from a successful retry.
  - title: Plan the release and rollback
    text: >-
      Write the deployment steps, expected checks and conditions that would trigger rollback. Consider data
      migrations carefully: reverting application code may not reverse changed data. Assign a release owner
      and a communication plan.
  - title: Review after launch
    text: >-
      Watch real user journeys, error trends and performance after release. Keep a short list of follow-up
      improvements. Document what went well and what should change for the next deployment.
draft: false
---


