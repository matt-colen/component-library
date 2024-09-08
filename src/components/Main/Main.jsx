import Section from "../Section/Section";
import Badges from "../Badges/index";
import Banner from "../Banner/index";
import Card from "../Card/index";
import Testimonial from "../Testimonial/index";
import { nanoid } from "nanoid";
import TestimonialImg from "../Testimonial/TestimonialImg";
import TestimonialText from "../Testimonial/TestimonialText";
import testimonialPic from "../../assets/images/testimonial.jpg";

export default function Main() {
  const statuses = ["success", "warning", "error", "neutral"];
  const defaultColor = "#2545B8";

  return (
    <main className="main grid">
      <Section header="Badges">
        <Badges style="square" />
        <Badges style="pill" />
      </Section>

      <Section header="Banners">
        {statuses.map((status) => {
          return (
            <div key={nanoid()}>
              <Banner type={status}>
                <Banner.Icon />
                <Banner.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam quo totam eius
                    aperiam dolorum.
                  </p>
                </Banner.Text>
              </Banner>
            </div>
          );
        })}
      </Section>

      <Section header="Cards">
        <Card>
          <Card.Icon bgColor={defaultColor} />
          <Card.Text header="Easy Deployment">
            <p>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </p>
          </Card.Text>
        </Card>
      </Section>

      <Section header="testimonials">
        <Testimonial
          bgColor={defaultColor}
          img={testimonialPic}
          alt="Woman smiling while sitting in chair"
        >
          <TestimonialImg />
          <TestimonialText name="May Andersons" workDetails="Workcation, CTO">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </TestimonialText>
        </Testimonial>
        <Testimonial bgColor="salmon">
          <TestimonialImg img="" alt="">
            {(img, alt) => {
              return img ? (
                <img className="testimonial-img" src={img} alt={alt} />
              ) : null;
            }}
          </TestimonialImg>
          <TestimonialText name="May Andersons" workDetails="Workcation, CTO">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </TestimonialText>
        </Testimonial>
      </Section>
    </main>
  );
}
