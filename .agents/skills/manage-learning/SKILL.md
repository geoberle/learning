---
name: manage-learning
description: Manage this repository’s learning missions and GitHub issues, integrate teach-generated materials, record reported progress, and reconcile the published overview.
---

# Manage learning

Read the repository’s AGENTS.md, GLOSSARY.md, and README.md for the model and publishing conventions. Resolve repository paths from the Git root; resolve teaching artifacts from the selected mission workspace.

## Establish context

Identify the requested operation and mission from the user’s request, parent issue, and workspace links. Read the relevant issues and existing workspace artifacts before making changes. If the target is ambiguous, ask which mission; do not select one from the current directory alone.

Use GitHub’s available connector or `gh` for issues and sub-issue relationships. Inspect existing state before creating issues or workspaces so retries reuse completed work.

## Define or evolve a mission

For a new mission, clarify the learner’s reason, observable success criteria, constraints, and scope using grilling. Define a concrete capability to acquire rather than an open-ended subject to study. Read the installed `teach` skill and its mission format. Confirm the mission before creating its workspace and MISSION.md. Reuse an existing backlog issue as the parent when it represents that mission; otherwise create a parent issue.

Link the parent issue to MISSION.md, the workspace, and available published materials; link MISSION.md back to the parent. Keep the full mission definition in MISSION.md. Record mission changes with the learner’s confirmation and a learning record according to `teach`.

Create sub-issues only for questions, exercises, or gaps needing their own tracking. Link related work across missions when useful; preserve one parent relationship per learning task.

## Mission lifecycle

Apply exactly one lifecycle label to each open mission parent or proposed mission issue:

- `mission:proposed`: an idea whose purpose and success criteria still need definition; a workspace is not required yet.
- `mission:ready`: the mission is agreed and its workspace is prepared, ready for learning.
- `mission:active`: the learner is currently working toward the mission.
- `mission:paused`: deliberately set aside; record context for resuming in the issue.

Replace the previous lifecycle label when changing state, preserving unrelated labels. Set active or paused from the learner’s intent or actual teaching activity, not from publishing materials. When resuming, use active. On reopening a closed mission, choose the appropriate open state from the learner’s intent.

On closure, remove the lifecycle label and use GitHub’s closure reason: completed only after the learner confirms the mission’s success criteria are met; not planned when they decide not to pursue it. Lifecycle labels describe status, never mission identity. Sub-issues use open/closed without these labels.

Verify the resulting labels and issue state after updates. Reconcile the overview with the lifecycle and closure reason, showing proposed ideas as Proposed rather than completed or ready.

## Teach and integrate

When teaching or creating educational content is requested, locate and read Matt Pocock’s installed `teach` skill and follow it from the mission workspace. If it is unavailable, report the missing dependency rather than substitute a different teaching process. Issue-only management and overview reconciliation do not require invoking teaching.

Let `teach` own educational content and pedagogical records. Preserve its numbered lessons, reference sheets, shared assets, and formats. Read existing assets before adding materials. Integrate the resulting lessons and reference sheets into the overview using the README’s relative-link conventions.

## Record progress and reconcile

Read current parent and sub-issue state and relevant learning records. Website quizzes provide immediate feedback; the learner explicitly reports results or questions to the agent for recording. Browser activity alone does not update authoritative progress, and the site requires no progress backend or GitHub authentication. Record the learner’s report or demonstrated evidence on the relevant issue, linking supporting learning records when available. Update pedagogical records through `teach` when teaching establishes new evidence; do not invent records from issue closure or publication.

Close learning tasks when their stated criteria are satisfied by evidence or the learner’s explicit report. Mission closure additionally requires the learner’s confirmation. Closed-as-not-planned issues represent dropped work, not learning completion. If issue state and evidence conflict, surface the discrepancy rather than claiming mastery.

Update the overview to reflect issue status and available materials. Link published lessons and the mission parent; retain unscoped ideas as backlog. Report task completion as task completion, never as a percentage of understanding. Manual GitHub changes are reflected on the next reconciliation; no background synchronization is assumed.

## Publish and verify

For requested material or overview updates, commit and push only the relevant changes. Check that local links and assets resolve, navigation returns to the overview, and URLs work beneath the repository’s Pages path. Verify the deployment for the pushed commit and fetch the affected public pages before reporting them live.

If GitHub or deployment fails, preserve completed work, report the exact unfinished step, and resume from that state. Do not create replacement issues or change hosting or repository visibility to bypass a failure.

Conclude with links to changed issues and published materials, what progress was recorded, and any unresolved deployment or learning questions.
