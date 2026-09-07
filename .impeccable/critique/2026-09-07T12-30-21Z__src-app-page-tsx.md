---
target: homepage
total_score: 21
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
target_identity: "file:/workspace/src/app/page.tsx"
target_fingerprint: "sha256:06f18e01a84a0e13aad9e99d9149b98aa396b7b61a9145b1daeb64cdb28a8122"
target_path: /workspace/src/app/page.tsx
timestamp: 2026-09-07T12-30-21Z
slug: src-app-page-tsx
---
# Critique: homepage src/app/page.tsx

Method: dual-agent (A: bc-fda96d75-b491-5dd3-94d4-6ee9a400ba42 · B: bc-37c51099-da0d-58c6-88b8-5b4f0bb52c11). Browser check: bc-f3898d14-0f89-5d12-bcfd-ed84228fa1c3.

## Design health

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of system status | 2 | CTA sounds like the quiz; next screen is OTP |
| 2 | Match system / real world | 3 | pt-BR and type names fit; H1 is generic wellness |
| 3 | User control and freedom | 2 | Nav hidden on mobile; footer has no links |
| 4 | Consistency and standards | 2 | Home cards vs /tipos; two filled pills |
| 5 | Error prevention | 2 | Header "Fazer o teste" does not restate e-mail + 135 |
| 6 | Recognition rather than recall | 2 | Mentor unnamed in Como funciona; Síntese unexplained |
| 7 | Flexibility and efficiency | n/a | Persuade landing |
| 8 | Aesthetic and minimalist design | 2 | Nine full type cards plus dual CTAs |
| 9 | Error recovery | 2 | Homepage has no errors; login missing resend |
| 10 | Help and documentation | 2 | No sample afirmativa; footer is a second disclaimer |
| **Total** | | **21/36** | Acceptable |

## Design specificity

Half-authored. Paper, Playfair, mark, Portuguese names, and #sobre belong here. The rest could sit on another quiz. 135 statements, saved ranking, and mentor are underplayed. CLI detect was clean on source; live overlay found 18 hits, mostly contrast.

## Priority issues

- P0: Sticky/hero "Fazer o teste" goes to /entrar. Label the real step.
- P1: Nine full type cards on a persuade page. Chunk by centros or tease 3.
- P1: Mobile nav amputated; 300px mark; footer has no links.
- P2: Dual filled pills. White on #2f9e6b is 3.4:1. Mute #6d7a8a is ~4.0:1.
- P3: #sobre is the human peak and still the quietest block.

## Detector vs review

Agree: green CTA contrast, mute gray, cream page. Disagree: CLI [] vs live 18 (static TSX misses computed contrast). cream-palette and overused-font are likely false positives. em-dash-overuse was from pre-unslop copy.

## Browser check

Playfair Display on h1. About section then dark CTA. /tipos and /entrar?next=/teste work. Desktop and 390px did not overflow.
