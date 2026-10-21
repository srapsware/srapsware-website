export const guides = [
  {
    slug: 'project-discovery', title: 'A practical software project brief',
    description: 'Prepare for a useful first conversation with your software partner.',
    sections: [
      { title: 'Start with the problem', text: 'Describe the workflow or customer problem in plain language. Who encounters it, how do they handle it today, and what does that cost in time or effort? Separate the problem from a preferred technical solution.' },
      { title: 'Define a useful first release', text: 'List the smallest set of capabilities that would make a real difference. Identify what must work on day one and what can follow. Include the people who will decide whether the release is acceptable.' },
      { title: 'Map the constraints', text: 'Document existing systems, integration owners, data availability, hosting requirements and accessibility needs. Identify any contractual or regulatory requirements for specialist review. Never share production credentials in the brief.' },
      { title: 'Agree on success', text: 'Choose a few observable outcomes: fewer manual steps, better task completion, or a workflow that users can finish reliably. Record the current baseline where possible. An outcome is more useful than a long feature list.' },
      { title: 'Bring the right context', text: 'Prepare sample workflows, anonymized data, existing designs and known deadlines. State the budget range and explain any deadline dependencies. Agree who can provide timely feedback and who owns final decisions.' },
    ],
  },
  {
    slug: 'launch-checklist', title: 'Before your next software release',
    description: 'A checklist for preparing a release, its users and its support team.',
    sections: [
      { title: 'Prove the core journeys', text: 'Test the actions your users rely on, including validation errors and interrupted requests. Check keyboard use, small screens and supported browsers. Ensure loading and empty states make sense and that failure messages offer a next step.' },
      { title: 'Prepare the environment', text: 'Confirm required configuration, access controls, backups and restoration procedures. Keep secrets out of source control. Verify certificates, domains, redirects and production integrations using approved test accounts.' },
      { title: 'Make delivery observable', text: 'Record application errors without collecting unnecessary personal data. Identify who responds to alerts. Verify that important transactions can be traced safely and that your team can distinguish a failed request from a successful retry.' },
      { title: 'Plan the release and rollback', text: 'Write the deployment steps, expected checks and conditions that would trigger rollback. Consider data migrations carefully: reverting application code may not reverse changed data. Assign a release owner and a communication plan.' },
      { title: 'Review after launch', text: 'Watch real user journeys, error trends and performance after release. Keep a short list of follow-up improvements. Document what went well and what should change for the next deployment.' },
    ],
  },
  {
    slug: 'integration-planning', title: 'Planning a dependable integration',
    description: 'Questions to answer before connecting two business systems.',
    sections: [
      { title: 'Name the source of truth', text: 'For each field, decide which system owns it. Document identifiers and update direction. Avoid allowing both systems to overwrite the same value without an explicit conflict-resolution rule.' },
      { title: 'Design for delayed and repeated events', text: 'Networks fail and events may arrive more than once. Define idempotency keys, retry limits, reconciliation jobs and a way to inspect unsuccessful transfers. Decide whether ordering matters for each event type.' },
      { title: 'Set a security boundary', text: 'Use scoped credentials, protected secret storage and verified webhook signatures where supported. Define who can access transferred data. Minimize the fields sent and establish a process for credential rotation.' },
      { title: 'Agree on service behavior', text: 'Understand rate limits, pagination, timeouts and vendor maintenance windows. Decide what users see when the upstream system is unavailable. Cache only where stale data is acceptable and clearly understood.' },
      { title: 'Test changes safely', text: 'Use sandbox environments and representative anonymized records. Test malformed payloads and schema changes. Version contracts where possible and document the owner on each side of the integration.' },
    ],
  },
] as const
