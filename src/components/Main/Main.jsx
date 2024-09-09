import { useState } from "react";
import Section from "../Section/Section";
import Badges from "../Badges/index";
import Banner from "../Banner/index";
import Card from "../Card/index";
import Testimonial from "../Testimonial/index";
import Tooltip from "../Tooltip/index";
import Toast from "../Toast/index";
import { nanoid } from "nanoid";
import testimonialPic from "../../assets/images/testimonial.jpg";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import tooltipTypes from "../../tooltipData";

export default function Main() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success"); // Tracks the selected toast type

  const triggerToast = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Automatically hides after 3 seconds
  };

  const handleToastTypeChange = (e) => {
    setToastType(e.target.value); // Updates the toast type based on user selection
  };

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

      <Section header="Testimonials">
        <Testimonial
          bgColor={defaultColor}
          img={testimonialPic}
          alt="Woman smiling while sitting in chair"
        >
          <Testimonial.Img />
          <Testimonial.Text name="May Andersons" workDetails="Workcation, CTO">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </Testimonial.Text>
        </Testimonial>
        <Testimonial bgColor={defaultColor} img="" alt="">
          <Testimonial.Img />
          <Testimonial.Text name="May Andersons" workDetails="Workcation, CTO">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </Testimonial.Text>
        </Testimonial>
      </Section>

      <Section header="Tooltips">
        <div className="tooltip-wrapper grid">
          {tooltipTypes.map((tooltip) => {
            return (
              <div key={nanoid()}>
                <Tooltip baseColor={tooltip.baseColor} style={tooltip.type}>
                  <Tooltip.Icon>
                    <MdOutlineArchive />
                  </Tooltip.Icon>
                  <Tooltip.Content
                    header={`${
                      tooltip.type === "bold" ? "Bold" : "Light"
                    } Tooltip`}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      oluptatum tenetur.
                    </p>
                  </Tooltip.Content>
                  <Tooltip.Btn>
                    <MdOutlineClose />
                  </Tooltip.Btn>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </Section>

      <Section header="Toast">
        <form className="toast-form grid" onSubmit={triggerToast}>
          <label className="type-header" htmlFor="status">
            Type of Toast
          </label>
          <select className="form-select" name="status" id="status" onChange={handleToastTypeChange}>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="neutral">Neutral</option>
          </select>
          <button className="form-btn">See Toast Example</button>
        </form>

        {/* Toast triggered by the form submission */}
        <Toast type={toastType} show={showToast} duration={3000}>
          <Toast.Icon />
          <Toast.Content title={`Toast`}>
            <p>This is a {toastType} toast notification.</p>
          </Toast.Content>
        </Toast>
      </Section>
    </main>
  );
}
