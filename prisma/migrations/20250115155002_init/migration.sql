-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "nom_client" TEXT NOT NULL,
    "adresse" TEXT,
    "rc" TEXT,
    "if" TEXT,
    "nif" TEXT,
    "nis" TEXT,
    "code_tiers" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marche" (
    "id" TEXT NOT NULL,
    "nom_marche" TEXT NOT NULL,
    "type_marche" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Marche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" TEXT NOT NULL,
    "num_devis" TEXT NOT NULL,
    "date_devis" TIMESTAMP(3) NOT NULL,
    "date_expiration" TIMESTAMP(3) NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_marche" TEXT NOT NULL,
    "montant_ht" DOUBLE PRECISION NOT NULL,
    "montant_tva" DOUBLE PRECISION NOT NULL,
    "montant_ttc" DOUBLE PRECISION NOT NULL,
    "statut_devis" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Situation" (
    "id" TEXT NOT NULL,
    "id_devis" TEXT NOT NULL,
    "periode" TEXT NOT NULL,
    "pourcentage_avancement" DOUBLE PRECISION NOT NULL,
    "montant_ht" DOUBLE PRECISION NOT NULL,
    "montant_tva" DOUBLE PRECISION NOT NULL,
    "montant_ttc" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Situation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facture" (
    "id" TEXT NOT NULL,
    "id_situation" TEXT NOT NULL,
    "date_facture" TIMESTAMP(3) NOT NULL,
    "montant_ht" DOUBLE PRECISION NOT NULL,
    "montant_tva" DOUBLE PRECISION NOT NULL,
    "montant_ttc" DOUBLE PRECISION NOT NULL,
    "statut_facture" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id" TEXT NOT NULL,
    "id_facture" TEXT NOT NULL,
    "montant_paiement" DOUBLE PRECISION NOT NULL,
    "date_paiement" TIMESTAMP(3) NOT NULL,
    "mode_paiement" TEXT NOT NULL,
    "statut_paiement" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" TEXT NOT NULL,
    "nom_produit" TEXT NOT NULL,
    "categorie" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "id_fournisseur" TEXT NOT NULL,
    "id_produit" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "emplacement" TEXT,
    "seuil_min" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" TEXT NOT NULL,
    "nom_fournisseur" TEXT NOT NULL,
    "adresse" TEXT,
    "telephone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Marche" ADD CONSTRAINT "Marche_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_id_marche_fkey" FOREIGN KEY ("id_marche") REFERENCES "Marche"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Situation" ADD CONSTRAINT "Situation_id_devis_fkey" FOREIGN KEY ("id_devis") REFERENCES "Devis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facture" ADD CONSTRAINT "Facture_id_situation_fkey" FOREIGN KEY ("id_situation") REFERENCES "Situation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "Facture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_id_fournisseur_fkey" FOREIGN KEY ("id_fournisseur") REFERENCES "Fournisseur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_id_produit_fkey" FOREIGN KEY ("id_produit") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
