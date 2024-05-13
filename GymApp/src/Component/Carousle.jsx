import React from "react";

function Carousle() {

    let s1 = "https://www.openstudycollege.com/osc/uploads/2019/11/OSC1041.jpg";
    let s2 = "https://www.thfi.com/cdn/shop/articles/How_to_lead_group_training_sessions-Blog-1200x800px-W39.jpg?v=1705484603&width=1200";
    let s3 = "https://images.squarespace-cdn.com/content/v1/6228f3d1b1687d77542b97f7/812a518d-52f1-4576-8e6a-7a2a435ab6c5/Sports+Recovery+Service+Image.png";
    let about = "https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg";
  return (
    <section className="main">
      <main>
        
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4 m-box">
              <img src={s1} alt="" />
              <h2 className="fw-normal">Personal Training</h2>
              <p>
              One-on-one sessions with a certified personal trainer who creates personalized workout plans, provides guidance on exercise techniques, and offers motivation and accountability.
              </p>
            </div>
            <div className="col-lg-4 m-box">
              <img src={s3} alt="" />
              <h2 className="fw-normal">Recovery Services</h2>
              <p>
              Amenities and services aimed at promoting post-workout recovery, including massage therapy, foam rolling areas, saunas, steam rooms, and cold plunge pools.
              </p>
            </div>
            <div className="col-lg-4 m-box">
              <img src={s2} alt="" />
              <h2 className="fw-normal">Group Fitness Classes</h2>
              <p>
              Scheduled classes led by instructors that cater to various fitness levels and interests, such as yoga, spinning, HIIT (High-Intensity Interval Training), Zumba, Pilates, and more.
              </p>
            </div>
          </div>

          <hr className="featurette-divider m-hr" />

          <div className="row featurette">
            <div className="col-md-7 m-feature">
              <h2 className="featurette-heading fw-normal lh-1">
                About us
              </h2>
              <p className="lead">
              we're more than just a fitness center — we're a community committed to helping you achieve your health and wellness goals. With state-of-the-art facilities, expert personal trainers, and a wide range of group fitness classes, we provide the tools and support you need to thrive on your fitness journey. Whether you're a beginner or a seasoned athlete, our inclusive environment welcomes all levels and backgrounds. At our gym, you'll find a place where encouragement, motivation, and empowerment go hand in hand. Join us and become part of something bigger than fitness — become part of our family.
              </p>
            </div>
            <div className="col-md-5 m-feature2">
              <img src={about} alt="" />
            </div>
          </div>
          <hr className="featurette-divider m-hr" />
        </div>
      </main>
    </section>
  );
}

export default Carousle;
