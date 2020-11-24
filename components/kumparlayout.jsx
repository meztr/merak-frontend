import tw, { styled, css } from 'twin.macro';
import Link from 'next/link';

function KumparLayout() {
    return (
        <>
            <div className="items-center justify-center h-full mb-40 overflow-hidden bg-red-500">
                {/* parent */}
                <div className="relative bg-white">
                    {/* subparent 2 */}
                    <div className="flex">
                        {/* child1 */}
                        <div className="flex-col w-1/5 h-auto pl-5 mt-16 bg-blue-100 border-r">
                            {/* child1.4 */}
                            <div
                                className="overflow-auto bg-yellow-200"
                                css={{ height: '330px' }}></div>
                        </div>
                        <div className="flex-col w-1/5 h-auto pl-5 mt-16 bg-blue-100 border-r">
                            {/* child1.4 */}
                            <div
                                className="overflow-auto bg-yellow-300"
                                css={{ height: '330px' }}></div>
                        </div>
                        <div className="flex-col w-1/5 h-auto pl-5 mt-16 bg-blue-100 border-r">
                            {/* child1.4 */}
                            <div
                                className="overflow-auto bg-yellow-300"
                                css={{ height: '330px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KumparLayout;
