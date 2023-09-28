import { Card } from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 flex flex-col w-full h-full justify-center items-center">
      <div>
        <p className="text-md text-center">Hi, My name is</p>
        <h2 className="text-4xl font-bold">Satish Panchal</h2>
      </div>
      <a href={"/satish_panchal_resume.pdf"} target={"_blank"} rel="noreferrer">
        <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary flex flex-col mt-5">
          Check Out My Resume !
        </button>
      </a>

      <div className="w-full my-5 flex flex-row flex-wrap">
        <div className="w-full md:w-[50%] p-3">
          <Card>
            <div className="flex flex-col p-5">
              <div className="flex flex-row w-full justify-between items-center">
                <Link
                  href="/https://thewalls.vercel.app/"
                  target="_blank"
                  className="text-lg font-bold"
                >
                  THE WALLS
                </Link>
                <p className="text-xs">September 2023</p>
              </div>
              <div className="text-zinc-300 mt-1">
                ● Developed a dynamic web application utilizing Spotify API to
                curate personalized album walls for users.
                <br />
                ● Implemented three distinct categories - Last Month, 6 Months &
                All Time - to showcase users listening history. <br />● Enabled
                seamless customization of album wall backgrounds, offering a
                selection of predefined gradients or the option to upload
                personal photos for a tailored aesthetic.
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-[50%] p-3">
          <Card>
            <div className="flex flex-col p-5">
              <div className="flex flex-row w-full justify-between items-center">
                <Link href="https://mithibaitechspark.in/" target="_blank">
                  <p className="text-lg font-bold">TECHSPARK</p>
                </Link>
                <p className="text-xs">February 2023</p>
              </div>
              <div className="text-zinc-300 mt-1">
                ● Implemented an intuitive & user-friendly interface for event
                registration for the annual technical fest of Mithibai. <br />●
                Utilized Firebase real-time database for efficient data
                management and retrieval, ensuring a seamless and smooth event
                registration process for participants.
                <br /> ● Contributed to the overall success of the technical
                festival by providing an efficient registration process for
                participants.
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-[50%] p-3">
          <Card>
            <div className="flex flex-col p-5">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-lg font-bold">FITNESS FACTORY</p>
                <p className="text-xs">September 2022</p>
              </div>
              <div className="text-zinc-300 mt-1">
                ● Fitness Application that helps users discover and learn
                exercises, with a focus on ease of use and accessibility. <br />
                ● Incorporated YouTube videos that demonstrate exercises and
                target specific muscle groups, making it easier for users to
                understand and perform exercises correctly.
                <br /> ● Delivered a well-rounded solution that combines
                information, visualization, and user engagement to make fitness
                accessible to everyone.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
