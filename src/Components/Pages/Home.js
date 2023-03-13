import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const Home = ({ toggleHeader }) => {
  useEffect(() => {
    toggleHeader(true);
    return () => {
      toggleHeader(false);
    };
  }, []);

  return (
    <div>
      <h2
        style={{
          fontFamily: "-moz-initial",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        TOURS
      </h2>
      <Container style={{ marginTop: "50px", maxWidth: "900px" }}>
        <Table size="sm" style={{ textAlign: "center" }}>
          <tbody >
            <tr>
              <th>JUL 16</th>
              <th>DETROIT, MI</th>
              <th>DTE ENERGY MUSIC THEATRE</th>
              <th>
                <button
                  style={{
                    display: "block",
                    padding: "7px",
                    borderRadius: "5px",
                    background: "#56CCF2",
                    color: "white",
                    border: "none",
                  }}
                >
                  BUY TICKETS
                </button>
              </th>
            </tr>
            <tr>
              <th>JUL 19</th>
              <th>TORONTO,ON</th>
              <th>TORONTO,ON</th>
              <th>
                <button
                  style={{
                    display: "block",
                    padding: "7px",
                    borderRadius: "5px",
                    background: "#56CCF2",
                    color: "white",
                    border: "none",
                  }}
                >
                  BUY TICKETS
                </button>
              </th>
            </tr>
            <tr>
              <th>JUL 22</th>
              <th>BRISTOW, VA</th>
              <th>JIGGY LUBE LIVE</th>
              <th>
                <button
                  style={{
                    display: "block",
                    padding: "7px",
                    borderRadius: "5px",
                    background: "#56CCF2",
                    color: "white",
                    border: "none",
                  }}
                >
                  BUY TICKETS
                </button>
              </th>
            </tr>
            <tr>
              <th>AUG 2</th>
              <th>LAS VEGAS, NV</th>
              <th>T-MOBILE ARENA</th>
              <th>
                <button
                  style={{
                    display: "block",
                    padding: "7px",
                    borderRadius: "5px",
                    background: "#56CCF2",
                    color: "white",
                    border: "none",
                  }}
                >
                  BUY TICKETS
                </button>
              </th>
            </tr>
            <tr>
              <th>AUG 7</th>
              <th>CONCORD, CA</th>
              <th>CONCORD PAVILION</th>
              <th>
                <button
                  style={{
                    display: "block",
                    padding: "7px",
                    borderRadius: "5px",
                    background: "#56CCF2",
                    color: "white",
                    border: "none",
                  }}
                >
                  BUY TICKETS
                </button>
              </th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default Home;
