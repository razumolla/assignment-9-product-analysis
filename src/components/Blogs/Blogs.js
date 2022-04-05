import React from 'react';

const Blogs = () => {
    return (
        <section class='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div class='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div>
                    <h1 class='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
                        Basic Questions
                    </h1>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Context API ?
                    </p>
                    <p class='text-gray-600'>
                        The Context API can be used to share data with multiple components, and create global variables as, an alternative to passing props manually in a component tree, without having to pass data through props manually.
                    </p>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Semantic tag ?
                    </p>
                    <p class='text-gray-600'>
                        HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it.HTML5 semantic elements also help search engines to read the page and find the required information faster. Exam: header ,div,main,article,footer etc.
                    </p>

                </div>

                <div>

                    <p class='mt-20 mb-3 font-semibold text-gray-900'>
                        Difference between Inline and Block element?
                    </p>
                    <p class='text-gray-600'>
                        Inline elements don't start from a new line and don't have top and bottom margins as block elements have. Examples of Inline elements: img, a, input, label etc Block Element:Block Element always start in a new line and have top and bottom margins. It does not contain any other elements next to it. Examples of Block elements: div, h1-h6, p, ul, li etc
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Blogs;