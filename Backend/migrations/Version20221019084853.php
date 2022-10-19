<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221019084853 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE matiere_produit (id INT AUTO_INCREMENT NOT NULL, produit_id INT DEFAULT NULL, matiere_id INT DEFAULT NULL, pourcentage_matiere DOUBLE PRECISION DEFAULT NULL, INDEX IDX_4A8363DBF347EFB (produit_id), INDEX IDX_4A8363DBF46CD258 (matiere_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE matiere_produit ADD CONSTRAINT FK_4A8363DBF347EFB FOREIGN KEY (produit_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE matiere_produit ADD CONSTRAINT FK_4A8363DBF46CD258 FOREIGN KEY (matiere_id) REFERENCES matiere (id)');
        $this->addSql('DROP TABLE produits_matiere');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE produits_matiere (produits_id INT NOT NULL, matiere_id INT NOT NULL, INDEX IDX_A986F593CD11A2CF (produits_id), INDEX IDX_A986F593F46CD258 (matiere_id), PRIMARY KEY(produits_id, matiere_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE produits_matiere ADD CONSTRAINT FK_A986F593CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produits_matiere ADD CONSTRAINT FK_A986F593F46CD258 FOREIGN KEY (matiere_id) REFERENCES matiere (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE matiere_produit');
    }
}
