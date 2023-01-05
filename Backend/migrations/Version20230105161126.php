<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230105161126 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits ADD produit_shooter TINYINT(1) DEFAULT NULL, ADD date_shooting DATE DEFAULT NULL, DROP motif_tache');
        $this->addSql('ALTER TABLE taches CHANGE date_modif date_motif DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits ADD motif_tache VARCHAR(255) DEFAULT NULL, DROP produit_shooter, DROP date_shooting');
        $this->addSql('ALTER TABLE taches CHANGE date_motif date_modif DATETIME NOT NULL');
    }
}
