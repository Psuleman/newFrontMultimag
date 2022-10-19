<?php

namespace App\Repository;

use App\Entity\FiltreRef;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FiltreRef>
 *
 * @method FiltreRef|null find($id, $lockMode = null, $lockVersion = null)
 * @method FiltreRef|null findOneBy(array $criteria, array $orderBy = null)
 * @method FiltreRef[]    findAll()
 * @method FiltreRef[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FiltreRefRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FiltreRef::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(FiltreRef $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(FiltreRef $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return FiltreRef[] Returns an array of FiltreRef objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FiltreRef
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
