import * as React from "react";
import PitchCard from "./molecules/PitchCard";

const Pitch = (props: { active: boolean }) => {
  return (
    <section id="pitch">
      <div>
        <h2>3 EASY STEPS</h2>
        <hr />
        <p id="first-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est
          ullam sed nostrum quia tempora, quam quis, earum, doloremque sequi
          commodi illo quae? Itaque nihil deserunt ipsam. Ipsa culpa sequi, cum
          quidem laborum possimus aspernatur sapiente dolorum porro. Blanditiis
          perferendis magnam pariatur tempore fugit deserunt commodi laboriosam,
          provident a nihil itaque. Quis, magni voluptatum harum non dolorum
          eveniet sequi quia ab distinctio nobis eos quasi iste, officiis rerum
          dignissimos modi incidunt id qui? Quasi dolores saepe nostrum! Magnam
          nam dolorem eaque ullam quia beatae eligendi sapiente assumenda facere
          fugiat quis similique, vel, labore officiis cupiditate ipsa aliquam?
          Cupiditate, nisi est?
        </p>
      </div>
      <PitchCard active={props.active} />
    </section>
  );
};

export default Pitch;
