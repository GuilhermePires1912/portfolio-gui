#!/bin/bash
# ────────────────────────────────────────────────────────────────────────────
# UPLOAD_VIDEOS.sh — Upload project videos to Catbox.moe
# Run this script when Catbox anon uploads are available again.
# Replace the placeholder URLs in src/data/advertisingProjects.ts
# ────────────────────────────────────────────────────────────────────────────

CATBOX="https://catbox.moe/user/api.php"
PROJETOS="$HOME/Desktop/PROJETOS"

upload() {
  local file="$1"
  local label="$2"
  echo -n "Uploading: $label ... "
  url=$(curl -s -F "reqtype=fileupload" -F "fileToUpload=@${file}" "$CATBOX")
  echo "$label >>> $url"
  echo "$label >>> $url" >> upload_log.txt
}

echo "Starting uploads... Log saved to upload_log.txt"
echo "" > upload_log.txt

# ── Os Outros ────────────────────────────────────────────────────────────────
# SKIP: Principal (312MB — exceeds Catbox limit)
upload "$PROJETOS/Os Outros/Vídeos/Ação especial - Jonas e Maxiane/wip_15_os outros (3).mp4" "osoutros_jonas_video"
upload "$PROJETOS/Os Outros/Vídeos/Social e Digital/GLOBOPLAY_OSOUTROST3_SALUTOSAESTEVES_TIKTOK_15S_9X16_LEGENDADO_ASSINE COM PRECO.mp4" "osoutros_social_1"
upload "$PROJETOS/Os Outros/Vídeos/Social e Digital/Globoplay_OsOutrosT3_TikTok_POV_9x16.mp4" "osoutros_social_2"
upload "$PROJETOS/Os Outros/Vídeos/Social e Digital/TEASER 1 SOCIAL 9x16.mp4" "osoutros_social_3"
upload "$PROJETOS/Os Outros/Vídeos/Social e Digital/OOT3 Portrait DATA.mp4" "osoutros_social_4"

# ── Turma da Monica ───────────────────────────────────────────────────────────
# SKIP: Principal (234MB — exceeds Catbox limit)
upload "$PROJETOS/Turma da Monica - Origens/Vídeos/Social e Digital/TURMA DA MONICA 7.mp4" "monica_social_1"
upload "$PROJETOS/Turma da Monica - Origens/Vídeos/Social e Digital/TURMA DA MONICA 70.mp4" "monica_social_2"
upload "$PROJETOS/Turma da Monica - Origens/Vídeos/Social e Digital/TURMA DA MONICA V2 70 7 16X9 TRILHA FUN social.mp4" "monica_social_3"
upload "$PROJETOS/Turma da Monica - Origens/Vídeos/Social e Digital/TURMA DA MONICA V2 70 7 16X9 TRILHA FUN 9x16.mp4" "monica_social_4"

# ── Vermelho Sangue ───────────────────────────────────────────────────────────
# Principal reusing catbox URL already in code
upload "$PROJETOS/Vermelho Sangue/Vídeos/Social e Digital/VS_JANELA OP2.mp4" "vs_social_1"
upload "$PROJETOS/Vermelho Sangue/Vídeos/Social e Digital/VS_QUEDA_SOCIAL.mp4" "vs_social_2"
upload "$PROJETOS/Vermelho Sangue/Vídeos/Social e Digital/VS_JANELA.mp4" "vs_social_3"
upload "$PROJETOS/Vermelho Sangue/Vídeos/Social e Digital/VS_BANHEIRO_OP2.mp4" "vs_social_4"

# ── Minha Mãe com Seu Pai ─────────────────────────────────────────────────────
upload "$PROJETOS/Minha Mãe com Seu Pai/Vídeos/Principal/GPLAY MMCSP T2 30_alta.mp4" "minhamae_principal"

# ── A Divisão ─────────────────────────────────────────────────────────────────
# SKIP: Principal (227MB — exceeds Catbox limit)
upload "$PROJETOS/A Divisão/Vídeos/Social e Digital/ADIVISAO_T4_TEASER_MULT_9x16.mp4" "adivisao_social_1"
upload "$PROJETOS/A Divisão/Vídeos/Social e Digital/ADIVISAO_T4_TEASER_SOMA_9x16.mp4" "adivisao_social_2"
upload "$PROJETOS/A Divisão/Vídeos/Social e Digital/ADIVISAO_T4_TEASER_SUBT_9x16.mp4" "adivisao_social_3"

# ── Cilada ────────────────────────────────────────────────────────────────────
# SKIP: CILADA_LANCAMENTO_90.mp4 (203MB — borderline, may fail)
upload "$PROJETOS/Cilada/Vídeos/Principal/GPLAY CILADA T1 60.mp4" "cilada_principal"
upload "$PROJETOS/Cilada/Vídeos/Social e Digital/Brunocenas9x16.mp4" "cilada_social_1"
upload "$PROJETOS/Cilada/Vídeos/Social e Digital/Bruno Youtube Bumper_16x9.mp4" "cilada_social_2"
upload "$PROJETOS/Cilada/Vídeos/Social e Digital/Bruno_Pai_Feed_9x16.mp4" "cilada_social_3"
upload "$PROJETOS/Cilada/Vídeos/Social e Digital/Bruno Trueview_16x9.mp4" "cilada_social_4"

# ── Raul Seixas ───────────────────────────────────────────────────────────────
# Principal reusing catbox URL already in code
upload "$PROJETOS/Raul Seixas /Vídeos/Social e Digital/RAUL_30_9X16_REFRESH.mp4" "raul_social_2"
upload "$PROJETOS/Raul Seixas /Vídeos/Social e Digital/GPLAY RAUL REACTS 60.mp4" "raul_social_3"

echo ""
echo "Done! Check upload_log.txt for URLs."
echo "Update src/data/advertisingProjects.ts with the returned URLs."
