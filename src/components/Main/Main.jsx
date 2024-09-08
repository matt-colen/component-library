import Section from "../Section/Section";
import Badges from "../Badges/index";
import Banner from "../Banner/index";
import Card from "../Card/index";
import { nanoid } from "nanoid";
import uploadIcon from "../../assets/icons/upload.svg";

export default function Main() {
  const statuses = ["success", "warning", "error", "neutral"];

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
          <Card.Icon>
            <img src={uploadIcon} alt="upload icon" />
          </Card.Icon>
          <Card.Text header="Easy Deployment">
            <p>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </p>
          </Card.Text>
        </Card>
      </Section>
    </main>
  );
}
