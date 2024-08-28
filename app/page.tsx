import Contact from "@/components/contact";
import { GridBackgroundDemo } from "@/components/grid-basckground";
import Intro from "@/components/intro";
import NewsletterForm from "@/components/newsletter.form";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <GridBackgroundDemo />
      <div className='container max-w-5xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        {/* <NewsletterForm /> */}
        <Contact />
      </div>
    </section>
  )
}