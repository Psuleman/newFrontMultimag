<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230103160707 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits ADD export TINYINT(1) DEFAULT NULL, ADD username VARCHAR(255) DEFAULT NULL, CHANGE description_fr description_fr LONGTEXT DEFAULT NULL, CHANGE nom_produit_fr nom_produit_fr LONGTEXT DEFAULT NULL, CHANGE nom_produit_en nom_produit_en LONGTEXT DEFAULT NULL, CHANGE dimension_fr dimension_fr LONGTEXT DEFAULT NULL, CHANGE dimension_en dimension_en LONGTEXT DEFAULT NULL, CHANGE description_en description_en LONGTEXT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits DROP export, DROP username, CHANGE description_fr description_fr VARCHAR(255) DEFAULT NULL, CHANGE nom_produit_fr nom_produit_fr VARCHAR(255) DEFAULT NULL, CHANGE nom_produit_en nom_produit_en VARCHAR(255) DEFAULT NULL, CHANGE dimension_fr dimension_fr VARCHAR(255) DEFAULT NULL, CHANGE dimension_en dimension_en VARCHAR(255) DEFAULT NULL, CHANGE description_en description_en VARCHAR(255) DEFAULT NULL');
    }
}
