import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Question = (props) => {
    console.log(props)
    return(
        <div>
            { props.question ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.question.fields.questionImage.fields.file.url}
                    title={props.question.fields.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.question.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.question.fields.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.question.fields.url} target="_blank">
                        Go To Question
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Question