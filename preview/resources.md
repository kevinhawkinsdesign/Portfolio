# Resources for designers building with AI

By Kevin Hawkins. Canonical page: https://kevinthecreator.com/ai.html#resources

The tools, skills, connectors and prompts Kevin recommends in his workshops and team setups.

## Connect Figma to your AI tools

Link: https://kevinthecreator.com/ai.html#res-setup

Install the Figma plugin in Claude Code or Cursor first. One step gives you the Figma MCP server and Figma's own skills.

```
# Claude Code
claude plugin install figma@claude-plugins-official
# then: /plugin > Installed > figma > sign in

# Cursor chat
/add-plugin figma
# then: Cursor Settings > Tools & MCP > Connect

# Any client: add an HTTP MCP server with this URL
https://mcp.figma.com/mcp
```

**What the plugin adds, and plan caveats**

The plugin adds the Figma MCP server plus Figma's skills: figma-use, figma-generate-design, figma-generate-library and more. Plan, seat and AI credit rules for the agent, code layers, Code Connect and write to canvas change often, so check Figma's current terms before you rely on a beta feature.

## Which tool, when

Link: https://kevinthecreator.com/ai.html#res-jobs

Pick one tool per row and get good at it. You do not need all of them on day one.

| The job | Reach for | Why it fits |
|---|---|---|
| Research and synthesis | Claude, Gemini Deep Research, Dovetail | Cited sources and long context. |
| Framing and strategy | Claude, Gemini | A thought partner that argues back. |
| Layouts on your design system | Figma agent | Starts from your libraries. Hands off editable Figma layers. |
| Real interaction beside your designs | Code layers | Starts from frames, a prompt, a repo or a webpage. Hands off code on canvas or a pull request. |
| A standalone app with data and logic | Figma Make | Starts from a prompt. Hands off a published app with a Supabase backend. |
| Fast exploration, decks, one-pagers | Claude Design | Starts from a prompt, files or a codebase. Hands off a Claude Code bundle, PDF, PPTX or Canva. |
| Production front-end | Cursor or Claude Code with the Figma MCP | Reads your Figma link, your repo and your Code Connect mappings. Hands off a pull request. |
| QA and accessibility | Figma agent skills, Cursor with axe | Repeatable checks instead of one-off reviews. |
| Marketing visuals | Gemini images, Figma Weave tools | Fast variations in one consistent style. |

**The rule of thumb**

Chat tools for thinking and words. The Figma agent when the output must live on your canvas with your components. Code layers, Figma Make or Claude Design when you need real interaction. Cursor or Claude Code when it becomes production code.

## Figma and design-to-code

Link: https://kevinthecreator.com/ai.html#res-figma

Start with the MCP server setup page, then Code Connect.

| Resource | What it's for |
|---|---|
| [The Figma agent](https://www.figma.com/solutions/ai-design-agent/) | An AI agent that works on your canvas with your libraries. |
| [Figma agents overview](https://www.figma.com/agents/) | What the agents can do and which plans include them. |
| [Figma MCP server setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) | Remote server install guide for any MCP-capable client. |
| [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas) | Let your AI tool create and edit real frames in Figma. |
| [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect) | Map design components to code components so generated code uses the real ones. |
| [Code layers in Figma Design](https://help.figma.com/hc/en-us/articles/44193259600535-Code-layers-in-Figma-Design) | Build and edit coded layers inside a design file. |
| [Figma Make](https://www.figma.com/solutions/ai-coding-agent/) | Go from a prompt or a frame to a working prototype. |
| [Config 2026 recap](https://www.figma.com/blog/config-2026-recap/) | The product announcements behind all of the above. |

## Prompt, prototype, test and ship

Link: https://kevinthecreator.com/ai.html#res-build

The everyday tools, from research to a live site.

| Resource | What it's for | Stage |
|---|---|---|
| [Claude](https://claude.ai) | Projects for research synthesis, plus Research for competitive scans. | Think |
| [Gemini Deep Research](https://gemini.google.com) | Sourced competitive scans with a link behind every claim. | Think |
| [Dovetail](https://dovetail.com) | Store and tag research so synthesis prompts have real evidence to read. | Research |
| [Claude Design](https://claude.ai/design) | Design with Claude on a canvas you can keep editing. Research preview. | Prototype |
| [Lovable](https://lovable.dev) | Prompt a first version of a site or product page to react to. | Prototype |
| [Claude Code](https://code.claude.com/docs) | Build in a real codebase from the terminal or the browser. | Build |
| [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) | No local install. Runs in the browser against your repos. | Build |
| [Cursor](https://cursor.com) | An AI-first editor. Pair it with the Figma MCP server to implement frames. | Build |
| [Payload CMS](https://payloadcms.com) | A code-first headless CMS for a site that non-developers need to edit. | Ship |
| [Maze](https://maze.co) | Run the unmoderated test your AI-written plan describes. | Test |

**How I have used these together**

I have used Claude with Payload CMS to design and ship a marketing site, and Lovable to get a first version in front of a team quickly. A launch checklist split into a soft launch and a hard launch, posted as a Slack thread, kept both honest.

## Ready-to-use UI components

Link: https://kevinthecreator.com/ai.html#res-components

Start from a library instead of a blank file. Give your agent one as a reference and the result looks far less generic.

| Library | What you get | Cost |
|---|---|---|
| [affectUI](https://affectui.com) | 243 React components, screens and motion effects for AI products and SaaS. One self-contained file each, installable with shadcn or MCP. | Free + Pro |
| [BoardUI](https://boardui.com) | React and Tailwind design system with 104 components, 19 charts and dashboard templates. | Free + Pro |
| [Watermelon UI](https://ui.watermelon.sh) | Open-source animated components, page sections and dashboards with Tailwind and shadcn/ui. | Free |
| [Kobra](https://kobra.systems) | Polished React components for shadcn/ui. | Free + Pro |
| [beUI Pro](https://pro.beui.dev) | Animated React, Next.js and React Native blocks, screens and templates in Tailwind. | Paid |
| [Libraries.dev](https://libraries.dev) | MIT-licensed React effects such as animated borders and thinking indicators, some for SwiftUI and React Native. | Free + Pro |
| [Bencho](https://bencho.dev) | Live, interactive React components and micro-interactions you can adjust and reuse. | See site |
| [Uiarc](https://uiarc.dev) | Ready-to-use UI components. | See site |

## An open-source toolkit for agent-built UI

Link: https://kevinthecreator.com/ai.html#res-toolkit

Fonts, layouts, contrast, icons, canvas and motion. Work in order: style, layout, contrast, sketch, animate.

| Tool | What it does | Step |
|---|---|---|
| [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 80 styles, palettes and font combos, ready to use. | Style |
| [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Anthropic's skill for UI that feels hand-made. | Style |
| [Hallmark](https://github.com/Nutlope/hallmark) | Real design, no AI fingerprints. | Style |
| [DESIGN.md](https://github.com/google-labs-code/design.md) | Explains your brand look to any agent. | Style |
| [Astryx](https://github.com/meta/astryx) | Meta's open design rules your agent can follow. | Style |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Components that live in your own code. | Layout |
| [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | Style anything without leaving your HTML. | Layout |
| [stitch-skills](https://github.com/google-labs-code/stitch-skills) | Write a prompt, get UI screens. | Layout |
| [Figma Context MCP](https://github.com/GLips/Figma-Context-MCP) | Your agent reads Figma files directly. | Layout |
| [Lucide](https://github.com/lucide-icons/lucide) | Clean icons that always match. | Layout |
| [Leonardo](https://github.com/adobe/leonardo) | Color palettes that always pass contrast. | Contrast |
| [Excalidraw](https://github.com/excalidraw/excalidraw) | Sketchy diagrams and quick wireframes. | Sketch |
| [tldraw](https://github.com/tldraw/tldraw) | An endless canvas for your ideas. | Sketch |
| [Rough.js](https://github.com/rough-stuff/rough) | Gives anything a hand-drawn feel. | Sketch |
| [Magic UI](https://github.com/magicuidesign/magicui) | Moving components, just copy and paste. | Animate |
| [WebGL Fluid](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) | Smoke and ink that really move. | Animate |
| [rembg](https://github.com/danielgatis/rembg) | Cuts out any subject in one line. | Animate |

## Skills worth installing

Link: https://kevinthecreator.com/ai.html#res-skills

Skills give your agent taste and repeatable habits. Start with one critic and one collection.

| Skill | What it does | Type |
|---|---|---|
| [Impeccable](https://impeccable.style) | Critique, audit and polish away generic UI. Its anti-slop page is worth reading on its own. | Taste |
| [Impeccable on GitHub](https://github.com/pbakaus/impeccable) | Source for the Impeccable skill. | Taste |
| [Taste Skill](https://tasteskill.dev) | A design skill for AI coding agents, by Leon Lin. A new version is on the way. | Taste |
| [Emil Kowalski's UI skills](https://aiforui.dev/skills) | Skills for UI design, animations and interactions. | Taste |
| [Meng To's skills](https://github.com/MengTo/skills) | UI, web design and illustration skills. | Taste |
| [Pinch](https://get-pinch.io/) | Point at details in screenshots and say why they work. Your agent checks new screens against those notes. Beta. | Taste |
| [Stageshow](https://github.com/benjitaylor/skills) | Faux UI stills, animations and bento grids for marketing and app store assets. | Assets |
| [Open Design](https://github.com/nexu-io/open-design) | Local-first, open-source AI design studio that uses the coding agent you already have. | Studio |
| [Solid Glass](https://github.com/deeplethe/solid-glass) | A design system between flat UI and liquid glass, with components for AI agent interfaces. | System |
| [Figma mcp-server-guide](https://github.com/figma/mcp-server-guide) | Figma's official skills on GitHub. | Collection |
| [Anthropic skills](https://github.com/anthropics/skills) | The reference collection of skills, including document formats. | Collection |
| [designer-skills](https://github.com/Owl-Listener/designer-skills) | 63 skills for research, systems, UI and handoff. | Collection |
| [Claude skills for design](https://www.figma.com/resource-library/claude-skills-for-design/) | Figma's guide to skills that help designers. | Guide |
| [Create skills for the Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/create-skills) | Turn a prompt that works into a repeatable team skill. | Guide |
| [Best Claude design skills for designers](https://www.magier.com/blog/best-claude-design-skills-for-designers) | A curated read from Magier. | Guide |
| [50 Claude Code skills for designers](https://nervegna.substack.com/p/50-claude-code-skills-for-designers) | A long list to browse by need. | Guide |

### Slash commands to try first

`/figma-use`, `/figma-generate-design`, `/figma-generate-library`, `/audit-design-system`, `/apply-design-system`, `/create-voice`, `/frontend-design`

**Where the commands come from, and install lines**

The Figma commands ship with the Figma plugin. The audit and apply commands come from Edenspiekermann, /create-voice from Uber (it writes VoiceOver, TalkBack and ARIA specs), and /frontend-design from Anthropic.

```
# Stageshow
npx skills add benjitaylor/skills --skill stageshow

# Taste Skill
npx skills add Leonxlnx/taste-skill
```

## Turn a prompt that works into a team skill

Link: https://kevinthecreator.com/ai.html#res-skill-template

A skill is a folder with a SKILL.md file. Build one team skill a month and you have a real design ops toolkit by summer.

**Show the SKILL.md template**

It needs a name, a description that says when to use it and when not to, ordered instructions, and edge cases. This one packages the token audit from prompt 12. In Claude Code, save it as .claude/skills/ds-audit/SKILL.md . In Cursor, run /create-skill and paste it in.

```
---
name: ds-audit
description: Audit Figma frames against the design system. Use for token, variable or component drift. Not for new designs.
---

# Design system audit

## When to use
When someone asks to check frames for hardcoded values or drift from the library.

## Instructions
1. Use the figma-use skill before any use_figma call.
2. List hardcoded colors, type, radius and spacing in the selection.
3. Match each to the closest library variable, with a confidence level.
4. Output a table. Change nothing until the user approves.
5. Fix high-confidence items only; report the rest.

## Examples
"Audit the booking widget frames" returns a table of layer, current value, suggested variable, confidence.

## Common edge cases
- No close match: flag it as "needs new token", never invent one.
- Component is detached: report it, don't reattach without approval.
```

## The prompt library

Link: https://kevinthecreator.com/ai.html#res-prompts

14 prompts across Discover, Define, Develop and Deliver. Open one, fill the [brackets], copy, run.

**Three habits that make every prompt better**

Give the model your real context (a Project with research, your Figma library, your repo). Ask it to mark what it inferred or guessed. Check numbers and quotes yourself before anything ships, and anonymize participant data according to your company's policy before uploading it. Generation got cheap. Judgment didn't.

### Discover

#### Prompt 01. A competitive scan that shows its sources

Try it in Gemini Deep Research, or Claude with Research on.

```
You are a UX researcher for a [your product category] platform. Research how [competitor 1], [competitor 2], [competitor 3], [competitor 4] and [competitor 5] design [the feature you are studying] for [your user type] with [typical scale]. For each product cover: [aspect 1], [aspect 2], and [aspect 3]. Return a comparison table with a source link for every claim. If you can't find evidence, write "no evidence found". Finish with 5 patterns worth testing and 3 to avoid.
```

#### Prompt 02. Interview synthesis you can trust

Try it in A Claude Project or a Gemini Gem with the transcripts attached.

```
Attached are [8] interview transcripts with [your user type]. Synthesize them:
1. Up to 8 themes. For each: how many participants mentioned it, 2 verbatim quotes with participant IDs, and any evidence against it.
2. Separate what people say they do from what they describe actually doing.
3. Mark anything you inferred rather than read.
Never invent or paraphrase inside quotation marks. End with 3 questions for our next round.
```

#### Prompt 03. Simulate a user, then list what to validate

Try it in Claude or Gemini. A simulated user is a sketch of a person, never a substitute for one.

```
Role-play a property manager in Lisbon with 40 short-term listings, 2 cleaners and 1 assistant. It's Sunday night before a big conference week. Walk me through, hour by hour, how you decide which rates to change and which tools you open. Then step out of the role and list the 10 assumptions in your story that I should validate with real users, ranked by risk.
```

### Define

#### Prompt 04. From themes to job stories and HMWs

Try it in Claude or Gemini, in the same Project or Gem as prompt 2 so it sees the evidence.

```
Here are our research themes: [paste]. Write:
1. 3 job stories (When..., I want to..., so I can...)
2. 3 problem statements naming the user, the need and the evidence
3. 5 How-might-we questions, from safe to bold
Rate each problem statement's confidence (low, medium, high) and tell me what evidence would change your mind. Push back if a theme is too thin to frame.
```

#### Prompt 05. Counterfactuals: what if the constraint disappeared?

Try it in Gemini or Claude. Swap in your own constraints: budget, channel rules, owner approval, regulation.

```
Our problem statement: [paste]. Run 4 counterfactuals:
1. What if changing prices were free and instant?
2. What if the manager had no historical data?
3. What if the AI could act without approval?
4. What if we had to ship in one week?
For each: what would we design differently, and what does that reveal about the real constraint?
```

#### Prompt 06. Define the role of AI in the product

Try it in Claude or Gemini, before designing any AI agent screen.

```
We're designing an AI pricing agent for property managers. For each action it could take (raise rates, lower rates, block dates, reply to a guest), recommend if it should be assistive (suggests), augmentative (acts after approval) or autonomous (acts, then reports). Give the risk if it's wrong, how we explain the decision, and how the user undoes it. Output a table.
```

### Develop

#### Prompt 07. Three directions on your design system

Try it in The Figma agent with your libraries enabled. Run A, B and C as parallel prompts so they don't converge.

```
Using our [your] library, create 3 directions for a Pricing suggestions experience on the multi-calendar:
A) inline in the calendar cells
B) a side panel
C) a morning digest
Use only library components and variables. For each direction show default, empty and error states, and explain how the user sees why a rate was suggested. Put each direction in its own labeled frame.
```

#### Prompt 08. Weeks become hours: a prototype from one brief

Try it in Claude, Claude Design, a Figma code layer or Figma Make. Check every number it shows: in my test run, one projected total was off by 10 euros.

```
Build an interactive, single-screen prototype: "Pricing suggestions" for a property manager with 40 listings in Lisbon and Barcelona. An AI pricing agent proposes rate changes for the next 14 days. Show each suggestion with current rate, suggested rate, % change, the reason in plain language and confidence in words. Let the user accept, edit or dismiss each one, and bulk-accept high-confidence ones, with 10 seconds to undo. Include loading, empty and error states. Explain the agent's guardrails. Use an 8px grid, WCAG AA contrast and realistic data. No lorem ipsum.
```

#### Prompt 09. Map the journey before the screens

Try it in Claude or Gemini, or the Figma agent in FigJam.

```
Before any screens, map the end-to-end journey for a property manager onboarding a new listing in [your product], from signing the owner to the first booking. For each step: the screen or channel, what the user needs to know, what can go wrong, and where AI could help or harm. Then propose the 6 screens to design first, and why.
```

#### Prompt 10. Campaign concepts with one visual language

Try it in Gemini for copy and images, then finish in Figma with Weave tools. Treat images as concepts; brand review still applies.

```
Create 4 ad concepts for [your product] aimed at property managers with 10 to 50 listings in Southern Europe. Core message: pricing that keeps working while you sleep. For each concept: a headline (max 6 words), a subline (max 12 words), the objection it answers, and the visual idea.
Then write one image prompt per concept in a consistent style: warm natural light, real apartment interiors, no faces looking at the camera, 4:5 crop, empty space at the top for the headline.
```

### Deliver

#### Prompt 11. Implement a frame with your real components

Try it in Cursor or Claude Code with the Figma MCP server. In Figma, right-click a layer and choose Copy link to selection.

```
Implement this design: [Figma link to selection].
Use our existing components, following the Code Connect mappings, and our design tokens. Never hardcode colors, spacing or radii. Build every state shown in the frame.
When you finish, list any element you couldn't map to a component and any value you had to guess.
```

#### Prompt 12. Audit tokens without the manual hunt

Try it in The Figma agent, or Claude Code with the Figma MCP server.

```
Audit the selected frames against our library. List every layer that uses a hardcoded color, font size, radius or spacing value instead of a variable. For each one, suggest the closest variable and your confidence.
Don't change anything yet: output a table. After I approve, fix only the high-confidence ones and report the rest.
```

#### Prompt 13. Accessibility QA before engineering starts

Try it in Cursor or Claude Code. Automated checks catch only part of accessibility issues; test with assistive tech and real users too.

```
Review this component for WCAG 2.2 AA. Compute the contrast of every text and background pair from the actual token values, not from the screenshot. Check focus order, keyboard access, screen reader labels, target size (at least 24 by 24 px) and reduced motion.
List issues by severity with the fix. Then write a Playwright and axe test that would catch them.
```

#### Prompt 14. A user test plan, and the readout after

Try it in Claude or Gemini, then run the test in Maze.

```
Write a 20-minute unmoderated test plan for the pricing suggestions prototype, for property managers who run 10+ listings. Include a screener, 5 tasks with success criteria, and 2 follow-up questions per task. Avoid leading language.
After the test I'll paste results: summarize by task with completion, time on task, verbatim quotes and the top 3 fixes.
```

## Five rituals that protect ownership

Link: https://kevinthecreator.com/ai.html#res-rituals

AI makes generating options cheap. These keep taste and decisions a team practice.

| Ritual | What it looks like |
|---|---|
| Show the prompt in crits | Share the agent thread with the design, so others see how you got there. |
| Diverge alone, converge together | Generate options with AI, choose the direction as a team. |
| One shared prompt and skill library | With a rotating owner who keeps it current. |
| Pair-prompt every week | Designer with an engineer, a PM or a marketer. |
| Name the human owner | Every AI-assisted decision has a person who signs it off. |

## Your next 30 days

Link: https://kevinthecreator.com/ai.html#res-plan

Multiply the people you already have. No new headcount required.

| Week | Focus | Do this |
|---|---|---|
| Week 1 | Set up | Install the Figma plugin in Claude Code or Cursor. Connect your libraries to the Figma agent. Try a code layer. |
| Week 2 | Practice | Everyone runs one Discover or Define prompt on a live project and shares the thread with the team. |
| Week 3 | Systematize | Turn the token audit into a team skill, and write your first PRODUCT.md and DESIGN.md. |
| Week 4 | Ship | Put one live prototype in front of 5 real users, and share what you learned. |

## Set up Claude for your whole team

Link: https://kevinthecreator.com/ai.html#res-team

One account per person. Connectors are per user and do not transfer.

| Step | What to do |
|---|---|
| [Create or log into Claude](https://claude.ai) | Start here for every teammate. |
| [Connectors settings](https://claude.ai/settings/connectors) | Connect Gmail, Google Calendar, Google Drive, Linear and Slack, each one individually. Add GitHub when you work in a repo. |
| [Capabilities settings](https://claude.ai/settings/capabilities) | Turn skills and plugins on or off. |

**Skills to switch on**

Everyday skills in Claude:

`xlsx`, `pptx`, `pdf`, `docx`, `skill-creator`, `morning`

Built into Claude Code sessions, no setup needed:

`verify`, `code-review`, `simplify`, `security-review`, `init`, `run`, `dataviz`, `artifact-design`, `loop`, `claude-api`, `update-config`, `session-start-hook`

## Read about the process

Link: https://kevinthecreator.com/ai.html#res-reading

If you read one thing, read the AIDE article.

| Article | What it covers |
|---|---|
| [Designing for intelligence (AIDE)](https://axdesigners.medium.com/designing-for-intelligence-reimagining-the-double-diamond-in-the-age-of-ai-7335be659a19) | Reimagining the Double Diamond in the age of AI. |
| [Gen AI design process (UX Planet)](https://uxplanet.org/gen-ai-design-process-rethinking-the-traditional-approach-for-next-gen-ux-5363c8dea4d7) | Rethinking the traditional approach for next-gen UX. |
| [How product designers can use AI](https://medium.com/@abieastwell/how-product-designers-can-use-ai-to-enhance-their-workload-be4d00537f0d) | Practical ways to enhance your workload. |
