import { Card, CardBody, CardFooter, CardHeader, Heading, Text} from "@chakra-ui/react"

export default function Note({ title, description, createdAt }){
    return(
    <Card.Root>
        <CardHeader><Heading size={"md"}>{title}</Heading></CardHeader>
            <CardBody >
                <Text>{description}</Text>
            </CardBody>
        <CardFooter>{createdAt}</CardFooter>
    </Card.Root>
    )
}