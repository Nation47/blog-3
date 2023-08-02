'use client'

import { useEffect, useState } from "react";
import supabase from "../config/supabase";
import {useRouter} from "next/navigation";

const Posts = () => {
    const [posts, setposts] = useState(null);
    const [err, setErr] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetch = async (e) => {
            const {data, err} = await  supabase
                .from('posts')
                .select('*');

                if(err){
                    setErr('do data available now');
                }
                if(data){
                    setposts(data);
                    setErr(null);
                    console.log(data)
                }
        }
        fetch();
    }, [])
    return (
        <>
            <div>
                {posts && (
                    <div className="grid grid-flow-row grid-cols-3 gap-2">
                        {posts.map(post => {
                            <div>
                                <h2>{post.title}</h2>
                            </div>
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
 
export default Posts;