import styled from "@emotion/styled";
import Link from "next/link";
import { Flex, Box } from "reflexbox";
import TextLoop from "react-text-loop";

function LoopInfo({ infos }) {
  if((!infos.topic)) {
    infos.topic = {}
    infos.topic.slug = 'uncategorized'
  }
  return (
    <Flex flexWrap="wrap" alignItems={"center"} bg={"lightgray"}>
      <Box pt={1} py={2} pl={3} width={1/8} bg="darkgray">
        <code style={{fontWeight:"bold"}}>Info Terbaru</code>
      </Box>{" "}
      <Box pl={3}>
        <TextLoop>
            {infos.map((info) => (
              <li key={info.id} style={{ listStyle: "none" }}>
                <a href={info.slug} style={{fontSize:'.9em', fontWeight:"bold"}}>{info.title}</a>
              </li>
            ))}
        </TextLoop>
      </Box>
    </Flex>
  );
}

export default LoopInfo;
