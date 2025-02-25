import React from "react";
import { Github, ExternalLink } from "lucide-react";
import olova from "../assets/images/olova.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "RELODE",
      description:
          "A tailored Shopify store for the modern Swedish gym wear brand.",
      tags: ["JavaScript", "React", "Web Development", "E-Commerce"],
      links: {
        demo: "https://relode.se/",
      },
      image: "/src/assets/images/relode.png",
      featured: true,
    },{
      title: "RALLY ENERGY",
      description:
          "Introducing a new responsive website for Rally Energy. The revamped digital experience embodies the brand's innovative and productivity-enhancing ethos.",
      tags: ["TypeScript", "Node", "Responsive Design", "E-Commerce"],
      links: {
        demo: "https://www.rallyenergy.co/",
      },
      image: "/src/assets/images/rally.png",
      featured: true,
    },{
      title: "Dirty Dog Beauty Club",
      description:
          "Heavy.Dev worked with DDBC to translate their colorful packaging and brand identity into an e-commerce experience packed with puppy personality.",
      tags: ["TypeScript", "Node", "Next.js", "Animation", "E-Commerce"],
      links: {
        demo: "https://www.dirtydogbeautyclub.com/",
      },
      image: "/src/assets/images/dirtydog.png",
      featured: true,
    },{
      title: "Le Nouveau Chef",
      description:
          "Le Nouveau Chef is a family business that sells fashionable, quality workwear to chefs and other catering professionals. Designed by Tim Borst at Stu Stu Studio / Developed by Code.",
      tags: ["TypeScript", "Express", "Next.js", "Fashion", "E-Commerce"],
      links: {
        demo: "https://lenouveauchef.com/",
      },
      image: "/src/assets/images/le-nouveau-chef.png",
      featured: true,
    },{
      title: "Mr Leight",
      description:
          "A new luxury line of eyewear and sunglasses, founded by Larry and Garrett Leight.",
      tags: ["TypeScript", "Angular", "CSS", "NestJS", "E-Commerce"],
      links: {
        demo: "https://www.garrettleight.com/",
      },
      image: "/src/assets/images/mr-leight.png",
      featured: true,
    },{
      title: "Carlin Wright",
      description:
          "Elegant website for Compass real estate agent Carlin Wright, featuring stunning lifestyle photos and property pages.",
      tags: ["React", "Node", "TypeScript", "CSS", "Real Estate"],
      links: {
        demo: "https://carlinwright.com/",
      },
      image: "/src/assets/images/carlin_wright.png",
      featured: true,
    },{
      title: "Proppie",
      description:
          "Proppie wants to make the real estate market more accessible for all through novel ownership solutions.",
      tags: ["Angular", "JavaScript", "CSS", "Real Estate"],
      links: {
        demo: "https://www.proppie.com.au/",
      },
      image: "/src/assets/images/proppie.png",
      featured: true,
    },{
      title: "FIX-IT",
      description:
          "What should you check first when your home internet isn't working? Find out in a fun way with this game! Developed with web accessibility, use arrow keys, Tab, Enter, Space to navigate.",
      tags: ["React", "JavaScript", "CSS", "Culture & Education"],
      links: {
        demo: "https://www.univision.mn/game/en/",
      },
      image: "/src/assets/images/fix_it.png",
      featured: true,
    },{
      title: "PAPER & TEA",
      description:
          "We are more than just tea. For us, it’s about people, community, and the feeling of being welcome. Our team lives and breathes what we do with passion and dedication.",
      tags: ["React", "JavaScript", "CSS", "Culture & Education"],
      links: {
        demo: "https://www.paperandtea.com/",
      },
      image: "/src/assets/images/paper_tea.png",
      featured: true,
    },{
      title: "AUSSIE BUCKETS",
      description:
          "Aussie Buckets provides high-quality excavator attachments built to Australian standards, ensuring durability, efficiency, and superior performance.",
      tags: ["Vue", "JavaScript", "CSS", "Business & Coporate", "E-Commerce"],
      links: {
        demo: "https://www.aussiebuckets.com.au/",
      },
      image: "/src/assets/images/aussie_buckets.png",
      featured: true,
    },{
      title: "Dagora",
      description:
          "Dagora is a multichain NFT marketplace that makes NFTs accessible for everyone.",
      tags: ["Blockchain", "NFT-Marketplace"],
      links: {
        demo: "https://dagora.xyz/",
      },
      image: "/src/assets/images/dagora.png",
      featured: true,
    },{
      title: "Unick",
      description:
          "Unick offers users a secure and seamless way to buy, sell, trade, and collect NFTs.",
      tags: ["Blockchain", "NFT-Marketplace"],
      links: {
        demo: "https://unick.io/",
      },
      image: "/src/assets/images/unick.png",
      featured: true,
    },{
      title: "Kompete-Game",
      description:
          "Kompete is a Web3 Game and NFT-Marketplace.",
      tags: ["React", "Node", "Alchemy", "Unreal Engine","Blockchain","Game", "NFT-Marketplace"],
      links: {
        demo: "https://kompete.game/",
      },
      image: "/src/assets/images/kompete.png",
      featured: true,
    }
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
