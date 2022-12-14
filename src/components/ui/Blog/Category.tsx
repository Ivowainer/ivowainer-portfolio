import Link from "next/link";
import { useRouter } from "next/router";

const Category = ({ name, number }: { name: string; number: number }) => {
    const router = useRouter();

    const {
        query: { category },
    } = router;

    return (
        <Link
            href={`/blog/category/${name.toLowerCase()}`}
            className={`${
                category == name.toLowerCase() ? "text-emerald-500" : null
            } cursor-pointer flex justify-between px-2 py-1 rounded-lg hover:text-[#10B981] dark:hover:text-[#059669] hover:bg-[#e4e3e3] hover:dark:bg-[#353f4e]`}
        >
            <p className="text-sm font-bold tracking-[0.3px]">{name}</p>
            <p className="text-sm tracking-[0.5px]">{number}</p>
        </Link>
    );
};

export default Category;
