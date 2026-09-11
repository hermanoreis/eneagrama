# Personagens papercraft

A família visual segue os conceitos aprovados para o Eneagrama: um personagem por tipo, com silhueta, dobra e gesto próprios. A arte usa papel fosco, luz suave, marfim e verde profundo na interface; terracota, rosa, ocre, lavanda e sálvia nas esculturas.

## Uso

- `public/images/characters/type-1.webp` até `type-9.webp`: esculturas individuais de frente. Olhos em branco para overlay HTML.
- `public/images/characters/type-1-versus.webp` até `type-9-versus.webp`: a mesma família, todos inclinados à direita, 3/4, prontos para um duelo de papel. Olhos já desenhados no arquivo. WebP com canal alpha (recorte do Hermano).
- `public/images/characters/stage.webp`: cenário da abertura.
- `TypeAvatar`: reutiliza a arte de frente na home, galeria, perfil, resultado sem empate e conta. Olhos são camadas HTML, posicionadas em porcentagem do arquivo original.
- Empate no resultado: `VersusDuel` monta o card em CSS (esquerda na pose original, direita com `scaleX(-1)`). Não usa `TypeAvatar`.
- `PaperMotion`: um controlador por região; só agenda frames quando há movimento do ponteiro. Não atualiza estado React e respeita `prefers-reduced-motion` e ponteiros de toque.
- Nomes e números ficam no HTML; nenhuma informação essencial depende de hover. Links preservam foco visível.
- Imagens são servidas por `next/image`, com dimensões reservadas e tamanhos responsivos.

## Recorte e otimização

Com autorização do usuário, os fundos quadriculados das esculturas originais (de frente) foram removidos localmente por máscara de cromaticidade, preservando as cores do papel. Os arquivos finais de frente usam WebP com canal alpha. As poses versus (`type-N-versus.webp`) também usam WebP com canal alpha, recortadas pelo Hermano.

## Geração

Ferramenta integrada `image_gen`, com a prancha aprovada `output/design/nove-tipos-papercraft-conceito.png` como referência visual. Os arquivos finais são copiados para `public/`; a aplicação não depende da pasta de geração local.

### Poses versus

Nove arquivos `type-N-versus.webp`, a partir dos mascotes de frente. Pose compartilhada: corpo inclinado à direita, 3/4, briga de papel leve. Cara creme com olhos já desenhados. Recorte alpha pelo Hermano. Sem anatomia realista, sem marca de jogo. No card, a figura da direita é espelhada em CSS.

### Prompts dos nove personagens

#### Tipo 1

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 1, top-left of reference: tall narrow terracotta rectangular frame body, precise aligned folds, rectangular cream face, folded arms gently aligning a small blank paper sheet. Shape distinctly taller and narrower than the broad type 8.

#### Tipo 2

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 2, top-middle: dusty rose rounded arch body, round cream face, two welcoming open folded arms. Symmetrical warm gesture.

#### Tipo 3

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 3, top-right: ochre tapered upward angular folded body, round hood and cream face, diagonal lapel-like fold, confident hands resting at sides.

#### Tipo 4

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 4, middle-left: muted lavender asymmetrical petal wrap, softly tilted round cream face, folded sculptural cloak of paper petals.

#### Tipo 5

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 5, center: muted sage compact angular wrap, curious slightly tilted cream face, one small round paper magnifying lens beside the body. NO book. Preserve compact angular silhouette.

#### Tipo 6

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 6, middle-right: muted olive grounded broad little body, round hood cream face, visibly interlocking front folds, two folded hands joined in front.

#### Tipo 7

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 7, bottom-left: mustard accordion fan-fold body, round hood cream face, two uplifted arms in joyful open gesture. Visible pleats.

#### Tipo 8

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 8, bottom-center: deep brick BROAD SHORT rectangular body, rectangular cream face, wide protective open arms, sturdy broad base. Broader and shorter than type 1, no paper sheet.

#### Tipo 9

Use case: stylized-concept. Production website character cutout, square 1024x1024. Reference is the approved roster sheet: preserve its tactile layered cardstock, visible folded edges, matte fibers, upper-left soft studio lighting, proportions and gentle personality. Extract and refine ONLY the specified character as ONE individual full-body sculpture. Truly transparent alpha background, no backdrop, no ground plane, no cast shadow outside character, no contact sheet, no text, numbers, labels or lettering. Center full body with 10% transparent margin on every edge, head near upper center, feet near bottom. Tiny cream paper face with tiny subtle smiling mouth, BUT LEAVE THE EYE AREA COMPLETELY BLANK: no eyes, pupils or eyebrows, because live eyes will be added by the website. A blank cream inset face is essential. No plastic, shiny 3D, realistic human anatomy, gender coding, extra props or other characters. Preserve the reference silhouette and color. Character: TYPE 9, bottom-right: pale sage balanced arch body with clearly open inverted U lower half, round cream face, two relaxed open arms. Preserve open arch silhouette.

### Cenário

Use case: stylized-concept. Production transparent website diorama stage, square 1024x1024 PNG with actual alpha transparency. Use supplied homepage concept ONLY as material and stage reference. Create ONLY the empty kraft paper display stage from its hero: three shallow curved terraced platforms, warm cardboard thickness and visible matte paper fibers. Viewed frontally very slightly from above, a low broad tier at bottom, medium tier in middle and narrow back tier, so each shelf has space for three small figurines. A single big lavender cardstock arch behind upper tier, small mustard paper disk on a slender kraft stem at upper right. EMPTY STAGE: no characters, faces, dolls, objects, writing, words, letters or numbers. Stage centered with 6% margin, fills bottom two thirds and arch extends to top. Soft upper-left light, short natural shadows between layers, no external cast shadow, alpha transparent outside cardboard. Calm handcrafted editorial physical paper sculpture, no shiny 3D, plastic, digital gradient or background rectangle. Asset intended to receive nine separately composited characters in HTML.

## Verificação da implementação

- Home revisada em 1440 px, 768 px, 390 px e 320 px, sem overflow horizontal.
- Nove personagens e nove links na galeria; mesmos arquivos reutilizados nos perfis e resultados.
- Ponteiro, retorno dos olhos ao repouso, foco visível e movimento reduzido verificados no navegador.
- Menu móvel abre, fecha ao navegar e responde a Escape, devolvendo o foco ao resumo.
- Capturas do build de produção em `docs/images/`.
- Lint, TypeScript, 11 testes de regressão e build com Webpack passaram.
