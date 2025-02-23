'use client'
import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from 'framer-motion';

const GridComponent = () => {
  return (
    <section id="about">
       <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <BentoGrid className="w-full py-8">
        {gridItems.map((item: any, i: any) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            image={item.img}
            stacks={item.stacks}
          />
        ))}
        
      </BentoGrid>
      </motion.div>
    </section>
  );
};

export default GridComponent;
