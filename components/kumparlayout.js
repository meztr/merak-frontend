import tw, { styled, css } from "twin.macro";
import Link from "next/link";

function KumparLayout() {
  return (
    <>
      <div
        className="h-full overflow-hidden items-center justify-center mb-40 bg-red-500"
      >
        {/* parent */}
        <div className="bg-white relative">
          {/* subparent 2 */}
          <div className="flex">
            {/* child1 */}
            <div className="flex-col border-r mt-16 pl-5 w-1/5 bg-blue-100 h-auto">
              {/* child1.4 */}
              <div
                className="bg-yellow-200 overflow-auto"
                css={{ height: "330px" }}
              >
                
              </div>
            </div>
            <div className="flex-col border-r mt-16 pl-5 w-1/5 bg-blue-100 h-auto">
              {/* child1.4 */}
              <div
                className="bg-yellow-300 overflow-auto"
                css={{ height: "330px" }}
              ></div>
            </div>
            <div className="flex-col border-r mt-16 pl-5 w-1/5 bg-blue-100 h-auto">
              {/* child1.4 */}
              <div
                className="bg-yellow-300 overflow-auto"
                css={{ height: "330px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KumparLayout;
