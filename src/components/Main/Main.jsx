import Banner from "../Banner/index";
import BadgeRow from "../BadgeRow/BadgeRow";

export default function Main() {
  return (
    <main className="main grid">
      <section className="section grid">
        <h2>Badges</h2>
        <BadgeRow />
        <BadgeRow style="pill" />
      </section>
      <section className="section grid">
        <h2>Banners</h2>
        <Banner type="success">
          <Banner.Icon></Banner.Icon>
          <Banner.Text title="Congratulations">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </Banner.Text>
        </Banner>
        <Banner type="warning">
          <Banner.Icon></Banner.Icon>
          <Banner.Text title="Attention">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </Banner.Text>
        </Banner>
        <Banner type="error">
          <Banner.Icon></Banner.Icon>
          <Banner.Text title="There is a problem with your application">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </Banner.Text>
        </Banner>
        <Banner type="neutral">
          <Banner.Icon></Banner.Icon>
          <Banner.Text title="Update available">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </Banner.Text>
        </Banner>
      </section>
    </main>
  );
}
