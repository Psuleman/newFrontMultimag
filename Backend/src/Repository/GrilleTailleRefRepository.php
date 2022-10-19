<?php

namespace App\Repository;

use App\Entity\GrilleTailleRef;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GrilleTailleRef>
 *
 * @method GrilleTailleRef|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrilleTailleRef|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrilleTailleRef[]    findAll()
 * @method GrilleTailleRef[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrilleTailleRefRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrilleTailleRef::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(GrilleTailleRef $entity, bool $flush = true): void
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
    public function remove(GrilleTailleRef $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return GrilleTailleRef[] Returns an array of GrilleTailleRef objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrilleTailleRef
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
