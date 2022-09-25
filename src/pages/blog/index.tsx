import { GetServerSideProps } from "next";
import Link from "next/link";
import MainLayout from "../../components/layout/MainLayout"
import getBlog from "../../helpers/getBlog"
import { blogProps } from "../../types/BlogTypes";

const blog = ({ posts }: blogProps) => {

    return (
        <MainLayout pageName="Blog">
            <div className="px-6 lg:px-20 pt-6 lg:pt-10 pb-8 min-h-screen dark:bg-gray-700">
                <p className="dark:text-gray-300 text-gray-600 font-bold text-4xl">✍️ Escritos</p>
                
                <div className="mt-8 lg:mt-16 w-5/6 lg:w-1/2 px-8 lg:px-10">
                    <div className="border-b pb-2 border-gray-500">
                        <p className="font-bold text-emerald-600 text-4xl">Latest Posts</p>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                        {posts.map(value => (
                            <div className="" key={value.attributes.Title}>
                                <Link href={`/blog/${value.attributes.Title}`}>
                                    <a className="flex justify-between hover:underline decoration-gray-700 dark:decoration-white">
                                        <p className="font-bold dark:text-gray-400 text-gray-500 text-lg">{value.attributes.Title}</p>
                                        <p className="text-emerald-400 text-sm">Sep 05</p>
                                    </a>
                                </Link>
                                <p className="text-sm dark:text-gray-500 text-gray-700">{value.attributes.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default blog

export const getServerSideProps: GetServerSideProps = async () => {
    const { data: { data } } = await getBlog('posts')

    return {
        props: {
            posts: data
        }
    }
}
