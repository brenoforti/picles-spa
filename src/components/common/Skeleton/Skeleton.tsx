import SkeletonLib, {SkeletonProps} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export function Skeleton(props: SkeletonProps) {
    return <SkeletonLib baseColor="#97b2d8" highlightColor="#d1e3fa" {...props} />
}