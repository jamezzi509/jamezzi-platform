# Jamezzi Paid-Course Standard

Version: `jamezzi-paid-course-v1`

This standard applies to every rebuilt Jamezzi lesson. A polished layout is not evidence that a lesson teaches a skill.

## Approval rule

A lesson cannot be marked approved until it passes every manual audit and records the required visual and practice evidence in `src/content/computer-course-quality.ts`.

## Beginner-language audit

- Define an unfamiliar word before using it in an instruction.
- Prefer concrete verbs and visible outcomes over abstract course language.
- Do not assume recognition of devices, icons, menus, operating systems, file types, or interface conventions.
- Explain what the learner should see before and after an action.
- Give an immediate example and a recovery route.
- Remove repeated slogans when a demonstration would teach more.

## Completeness audit

For every action, answer:

1. What is it?
2. Why would the learner use it?
3. Where is it?
4. What does it look like?
5. Is it clicked, tapped, held, typed, dragged, or selected?
6. What should happen?
7. How long should the learner wait?
8. What common mistake can occur?
9. How does the learner recover?
10. When should the learner stop and ask for help?

## Visual audit

- Every visual must teach a named point; decorative filler does not count.
- Every physical object the learner must recognize receives its own realistic image or close-up.
- Windows and Mac actions receive separate views when their interfaces differ.
- Location-based instructions show the larger context and a close-up.
- Motion-based actions use a sequence, animation, or interactive demonstration.
- Processes use precise diagrams; photographs are not forced to explain invisible concepts.
- Essential labels remain in translatable HTML whenever practical.
- Images include meaningful alt text and captions.
- Generated photography is rejected when geometry, controls, keys, connectors, text, or physical relationships are inaccurate.

## Interaction audit

If the browser can verify the skill, the lesson must use a keyboard-accessible interaction rather than self-attestation alone.

Examples include clicking, double-clicking, secondary-clicking, scrolling, dragging, typing, editing, matching, sequencing, shortcut detection, and reversible previews.

When browser security prevents verification of a real operating-system action, the lesson uses:

1. an accurate simulation;
2. guided real-device practice;
3. visible result criteria;
4. a recovery route;
5. a scenario check.

## Factual audit

- Current interface or product claims require official primary sources.
- Version-sensitive instructions state what may vary.
- A minimum requirement is never presented as a buying recommendation.
- A diagram that simplifies reality says what was simplified.
- The verified date is updated only after the lesson is actually rechecked.

## Translation audit

- English, French, and Haitian Creole share stable lesson and interaction IDs.
- Progress is shared between languages.
- Layouts allow translated text to expand.
- Essential instructions and feedback are not permanently baked into raster images.
- Accents, punctuation, labels, alt text, and validation feedback are translatable.

## Accessibility and mobile audit

- Every interaction works by keyboard and has visible focus.
- Instructions do not rely on color alone.
- Touch targets remain usable on mobile.
- Motion has a reduced-motion path.
- Text remains readable at increased browser zoom.
- Mobile learners can access module navigation, reset controls, instructions, practice, feedback, and recovery.

## Delivery gate

Before delivery, report:

- approved lesson IDs;
- factual sources checked;
- photographs, screens, diagrams, and motion assets added;
- browser-verifiable interactions added;
- real-device tasks that remain self-attested and why;
- desktop, mobile, keyboard, translation, and recovery audit results;
- automated test and production-build results.

Anything still marked `needs-rebuild` is working material, not an approved paid-course lesson.
