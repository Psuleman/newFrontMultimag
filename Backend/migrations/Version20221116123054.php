<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221116123054 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie_ref (id INT AUTO_INCREMENT NOT NULL, categorie_ref VARCHAR(255) NOT NULL, categorie_ref_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE company (id INT AUTO_INCREMENT NOT NULL, company VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE continents (id INT AUTO_INCREMENT NOT NULL, continent VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE employe (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, employe VARCHAR(255) NOT NULL, INDEX IDX_F804D3B9979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE filtre_ref (id INT AUTO_INCREMENT NOT NULL, sous_categorie_ref_id INT DEFAULT NULL, filtre VARCHAR(255) NOT NULL, filtre_ref_en VARCHAR(255) DEFAULT NULL, INDEX IDX_3FA8C6C0E359B7AE (sous_categorie_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grille_taille_ref (id INT AUTO_INCREMENT NOT NULL, grille_taille_ref VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque_ref (id INT AUTO_INCREMENT NOT NULL, marque VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE matiere_produit (id INT AUTO_INCREMENT NOT NULL, produit_id INT DEFAULT NULL, matiere_id INT DEFAULT NULL, pourcentage_matiere DOUBLE PRECISION DEFAULT NULL, INDEX IDX_4A8363DBF347EFB (produit_id), INDEX IDX_4A8363DBF46CD258 (matiere_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE matieres (id INT AUTO_INCREMENT NOT NULL, matiere VARCHAR(255) NOT NULL, matiere_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pays (id INT AUTO_INCREMENT NOT NULL, continent_id INT DEFAULT NULL, pays VARCHAR(255) NOT NULL, INDEX IDX_349F3CAE921F4C77 (continent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, sku INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits (id INT AUTO_INCREMENT NOT NULL, marque_id INT DEFAULT NULL, filtre_id INT DEFAULT NULL, sku INT NOT NULL, code_fournisseur VARCHAR(255) NOT NULL, nom_fournisseur VARCHAR(255) NOT NULL, reference_fournisseur VARCHAR(255) NOT NULL, code_couleur VARCHAR(255) NOT NULL, reference_couleur VARCHAR(255) DEFAULT NULL, code_saison INT NOT NULL, saison VARCHAR(100) DEFAULT NULL, annee_sortie INT NOT NULL, code_categorie_univers INT DEFAULT NULL, categorie_univers VARCHAR(255) DEFAULT NULL, code_mode_aquisition INT DEFAULT NULL, mode_acquisition VARCHAR(255) DEFAULT NULL, code_tag INT DEFAULT NULL, tag VARCHAR(255) DEFAULT NULL, code_famille_5 INT DEFAULT NULL, famille_5 VARCHAR(255) DEFAULT NULL, code_famille_6 INT DEFAULT NULL, famille_6 VARCHAR(255) DEFAULT NULL, grille_taille_fournisseur VARCHAR(100) NOT NULL, date_ref DATETIME DEFAULT NULL, univers VARCHAR(255) DEFAULT NULL, univers_en VARCHAR(255) DEFAULT NULL, couleur VARCHAR(255) DEFAULT NULL, couleur_en VARCHAR(255) DEFAULT NULL, pays_origine VARCHAR(255) DEFAULT NULL, entretien VARCHAR(255) DEFAULT NULL, entretien_en VARCHAR(255) DEFAULT NULL, description_fr VARCHAR(255) DEFAULT NULL, description_en VARCHAR(255) DEFAULT NULL, nom_produit_fr VARCHAR(255) DEFAULT NULL, nom_produit_en VARCHAR(255) DEFAULT NULL, dimension_fr VARCHAR(255) DEFAULT NULL, dimension_en VARCHAR(255) DEFAULT NULL, coupe VARCHAR(255) DEFAULT NULL, coupe_en VARCHAR(255) DEFAULT NULL, pictures LONGTEXT DEFAULT NULL, lien VARCHAR(255) DEFAULT NULL, tags_ref LONGTEXT DEFAULT NULL, code_sous_categorie_fnr INT NOT NULL, sous_categorie_fnr VARCHAR(255) NOT NULL, longueur DOUBLE PRECISION DEFAULT NULL, largeur DOUBLE PRECISION DEFAULT NULL, hauteur DOUBLE PRECISION DEFAULT NULL, poids DOUBLE PRECISION DEFAULT NULL, new_produit TINYINT(1) NOT NULL, referencer TINYINT(1) NOT NULL, new_list_attente TINYINT(1) DEFAULT NULL, date_arrivee DATE DEFAULT NULL, INDEX IDX_BE2DDF8C4827B9B2 (marque_id), INDEX IDX_BE2DDF8CCC9B96EA (filtre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sous_categorie_ref (id INT AUTO_INCREMENT NOT NULL, categorie_ref_id INT DEFAULT NULL, sous_categorie_ref VARCHAR(255) NOT NULL, sous_categorie_ref_en VARCHAR(255) DEFAULT NULL, INDEX IDX_7BFFA2DA791EB90 (categorie_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taille_ref (id INT AUTO_INCREMENT NOT NULL, grille_taille_ref_id INT DEFAULT NULL, taille_ref VARCHAR(255) DEFAULT NULL, stock_id VARCHAR(100) NOT NULL, stock_code VARCHAR(50) DEFAULT NULL, INDEX IDX_82268A2BE4D38067 (grille_taille_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tarifs (id INT AUTO_INCREMENT NOT NULL, produit_id INT DEFAULT NULL, prix_vente DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION DEFAULT NULL, INDEX IDX_F9B8C496F347EFB (produit_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tarifs_pays (tarifs_id INT NOT NULL, pays_id INT NOT NULL, INDEX IDX_C0E01208F5F3287F (tarifs_id), INDEX IDX_C0E01208A6E44244 (pays_id), PRIMARY KEY(tarifs_id, pays_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE test (id INT AUTO_INCREMENT NOT NULL, matiere_id INT DEFAULT NULL, product_id INT DEFAULT NULL, pourcentage_matiere DOUBLE PRECISION NOT NULL, INDEX IDX_D87F7E0CF46CD258 (matiere_id), INDEX IDX_D87F7E0C4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) DEFAULT NULL, token_mail VARCHAR(255) DEFAULT NULL, token_password VARCHAR(255) DEFAULT NULL, date_token_mail DATETIME DEFAULT NULL, date_token_password DATETIME DEFAULT NULL, service VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE variants (id INT AUTO_INCREMENT NOT NULL, sku_id INT DEFAULT NULL, taille_ref_id INT DEFAULT NULL, taille_fnr VARCHAR(255) NOT NULL, variant_sku VARCHAR(255) DEFAULT NULL, stock_0 INT DEFAULT NULL, stock_3 INT DEFAULT NULL, stock_7 INT DEFAULT NULL, stock_9 INT DEFAULT NULL, stock_11 INT DEFAULT NULL, stock_12 INT DEFAULT NULL, stock_14 INT DEFAULT NULL, stock_18 INT DEFAULT NULL, stock_20 INT DEFAULT NULL, stock_60 INT DEFAULT NULL, INDEX IDX_B39853E11777D41C (sku_id), INDEX IDX_B39853E14138998F (taille_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE employe ADD CONSTRAINT FK_F804D3B9979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE filtre_ref ADD CONSTRAINT FK_3FA8C6C0E359B7AE FOREIGN KEY (sous_categorie_ref_id) REFERENCES sous_categorie_ref (id)');
        $this->addSql('ALTER TABLE matiere_produit ADD CONSTRAINT FK_4A8363DBF347EFB FOREIGN KEY (produit_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE matiere_produit ADD CONSTRAINT FK_4A8363DBF46CD258 FOREIGN KEY (matiere_id) REFERENCES matieres (id)');
        $this->addSql('ALTER TABLE pays ADD CONSTRAINT FK_349F3CAE921F4C77 FOREIGN KEY (continent_id) REFERENCES continents (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8C4827B9B2 FOREIGN KEY (marque_id) REFERENCES marque_ref (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CCC9B96EA FOREIGN KEY (filtre_id) REFERENCES filtre_ref (id)');
        $this->addSql('ALTER TABLE sous_categorie_ref ADD CONSTRAINT FK_7BFFA2DA791EB90 FOREIGN KEY (categorie_ref_id) REFERENCES categorie_ref (id)');
        $this->addSql('ALTER TABLE taille_ref ADD CONSTRAINT FK_82268A2BE4D38067 FOREIGN KEY (grille_taille_ref_id) REFERENCES grille_taille_ref (id)');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C496F347EFB FOREIGN KEY (produit_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE tarifs_pays ADD CONSTRAINT FK_C0E01208F5F3287F FOREIGN KEY (tarifs_id) REFERENCES tarifs (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tarifs_pays ADD CONSTRAINT FK_C0E01208A6E44244 FOREIGN KEY (pays_id) REFERENCES pays (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE test ADD CONSTRAINT FK_D87F7E0CF46CD258 FOREIGN KEY (matiere_id) REFERENCES matieres (id)');
        $this->addSql('ALTER TABLE test ADD CONSTRAINT FK_D87F7E0C4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE variants ADD CONSTRAINT FK_B39853E11777D41C FOREIGN KEY (sku_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE variants ADD CONSTRAINT FK_B39853E14138998F FOREIGN KEY (taille_ref_id) REFERENCES taille_ref (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sous_categorie_ref DROP FOREIGN KEY FK_7BFFA2DA791EB90');
        $this->addSql('ALTER TABLE employe DROP FOREIGN KEY FK_F804D3B9979B1AD6');
        $this->addSql('ALTER TABLE pays DROP FOREIGN KEY FK_349F3CAE921F4C77');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CCC9B96EA');
        $this->addSql('ALTER TABLE taille_ref DROP FOREIGN KEY FK_82268A2BE4D38067');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8C4827B9B2');
        $this->addSql('ALTER TABLE matiere_produit DROP FOREIGN KEY FK_4A8363DBF46CD258');
        $this->addSql('ALTER TABLE test DROP FOREIGN KEY FK_D87F7E0CF46CD258');
        $this->addSql('ALTER TABLE tarifs_pays DROP FOREIGN KEY FK_C0E01208A6E44244');
        $this->addSql('ALTER TABLE test DROP FOREIGN KEY FK_D87F7E0C4584665A');
        $this->addSql('ALTER TABLE matiere_produit DROP FOREIGN KEY FK_4A8363DBF347EFB');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C496F347EFB');
        $this->addSql('ALTER TABLE variants DROP FOREIGN KEY FK_B39853E11777D41C');
        $this->addSql('ALTER TABLE filtre_ref DROP FOREIGN KEY FK_3FA8C6C0E359B7AE');
        $this->addSql('ALTER TABLE variants DROP FOREIGN KEY FK_B39853E14138998F');
        $this->addSql('ALTER TABLE tarifs_pays DROP FOREIGN KEY FK_C0E01208F5F3287F');
        $this->addSql('DROP TABLE categorie_ref');
        $this->addSql('DROP TABLE company');
        $this->addSql('DROP TABLE continents');
        $this->addSql('DROP TABLE employe');
        $this->addSql('DROP TABLE filtre_ref');
        $this->addSql('DROP TABLE grille_taille_ref');
        $this->addSql('DROP TABLE marque_ref');
        $this->addSql('DROP TABLE matiere_produit');
        $this->addSql('DROP TABLE matieres');
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE produits');
        $this->addSql('DROP TABLE sous_categorie_ref');
        $this->addSql('DROP TABLE taille_ref');
        $this->addSql('DROP TABLE tarifs');
        $this->addSql('DROP TABLE tarifs_pays');
        $this->addSql('DROP TABLE test');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE variants');
    }
}
