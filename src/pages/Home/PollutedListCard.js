import React from "react"
import { Card, CardBody, CardFooter, CardTitle, Table } from "reactstrap"
import styles from "./Home.module.css"

const AqiContainer = props => {
  return (
    <div className={`${styles.aqiCon} ${styles.danger}`}>{props.children}</div>
  )
}

const PollutedListCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className={styles.title}>
          Most Polluted Nodes in NUST
        </CardTitle>
        <p className="text-muted">Realtime worst node Ranking</p>
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Node</th>
                <th>AQI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Concordia 2</td>
                <td>
                  <AqiContainer>200</AqiContainer>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Gate 1 Node</td>
                <td>
                  <AqiContainer>165</AqiContainer>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Seecs Node</td>
                <td>
                  <AqiContainer>100</AqiContainer>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardFooter className={styles.footerCard}></CardFooter>
      </CardBody>
    </Card>
  )
}

export default PollutedListCard
