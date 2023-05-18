import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card width="100%" height="100%" variant="filled">
      <Skeleton height="78%" />
      <CardBody>
        <SkeletonText height="22%" />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
