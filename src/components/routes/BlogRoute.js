import { Header } from "../Header/Header";
import { BlogMain } from "../BlogMain/BlogMain";

import "../App.scss";
import "../assests/fonts/index.scss";

export const BlogRoute = () => {
    return (
        <>
            <div className="BlogWrapper">
                <Header />
                <BlogMain />
            </div>
        </>
    );
}
