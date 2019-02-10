

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            width : window.outerWidth
        })
    }
    render(){
        return (
            React.createElement('Router',null,
        React.createElement('div',
        {style :{display : 'flex', flexDirection : 'row', backgroundColor : '',paddingTop : 10, margin : 0}},
        React.createElement('div',{style : {width : this.state.width < 900 ? 100+'%' : 80+'%', textAlign : 'left', backgroundColor : '', padding : 10}},
        React.createElement('h1',
        {style : {fontFamily : 'sans-serif', textAlign : 'left', width : this.state.width < 900 ? 90+"%": 70+'%', margin : 'auto', padding : 30}},
        `Humans use only 10 percent of their brain. Is this a myth or reality?`
        ),
        React.createElement('div',{style : {fontSize : 20, lineHeight : 1.4, color : 'black'}},
        React.createElement('p',{style : {width : this.state.width < 900 ? 90+'%': 60+'%', margin : 'auto',padding : 20}},
        `Today we will talk about the topic about which everyone have heard at lot through their friends, teachers, 
        motivational speaker etc. You must have heard that humans only use their 10 percent of the brain and if you 
        could unlock the rest of your brainpower, you could do so much more. You could become a super genius and do 
        some exceptional things like mind reading and all. Lets talk about this in details.`
        ),
        React.createElement('p',{style : {width : this.state.width < 900 ? 90+'%': 60+'%', margin : 'auto',padding : 20}},
        `The human brain is very complex and still very mysterious and this could be the reason for so many myths about 
        brain persists. The most common myth is that the human only utilize their 10 percent of the brain power. This myth
         often used to speculate about the extent of the human abilities if we could use full capacity of our brain. Brain 
         scientists have shown that there is no part of the brain which is inactive. Each part of brain get engaged when 
         doing any work. No part seems inactive.`
         ),
        React.createElement('p',{style : {width : this.state.width < 900 ? 90+'%': 60+'%', margin : 'auto',padding : 20}},
        `People often experience the shortcomings of their own mental abilities such as failing to understand a complex 
        math problem or forgetting some vital piece of information. Well intentioned peoples such as motivational speakers 
        and teachers often uses this myth as to demonstrate peoples to live up to their potential. But some peoples have 
        taken this as the reality. Some uses it as their weapon for their product selling or promoting their products and 
        claims that using their product unlock your 90 percent of the brain.`
        ),
        React.createElement('p',{style : {width : this.state.width < 900 ? 90+'%': 60+'%', margin : 'auto',padding : 20}},
        `At last I just want you spread this message and tell others about this. Human uses their 100 percent of the brain 
        until and unless their brain is damaged. So it is our responsibility to stop spreading such myths. If anyone talks 
        about such a myth then, you would have an answer for them.`
        )
        )
        ),
        this.state.width < 900 ? null : 
        React.createElement('div',{style : {width:20+'%', backgroundColor : 'white', textAlign : 'center', padding : 10, borderRadius : 10}},this.state.width)
        )
        )
        )
    }
}

/*let obj = {
    heading : {
        element : 'h1',
        s : {backgroundColor : 'red'},
        data : 'Hello Bhati ji'
    },

}

class Name extends React.Component{
    render(){
        return React.createElement(obj.heading.element,{style : obj.heading.s},obj.heading.data);
    }
}*/
ReactDOM.render(React.createElement(Main),document.getElementById('main'));