Survey.defaultBootstrapCss.rating.item = "btn btn-default";
Survey.defaultBootstrapCss.rating.selected = "btn-primary";
Survey.StylesManager.applyTheme("bootstrap");

function sendDataToServer(){}
function convertViralLoadToRisk(viralLoad){
    if(viralLoad > 2000){
        return "Very high"
    } else if(viralLoad > 500) {
        return "High"
    } else if(viralLoad > 200) {
        return "Medium"
    } else if(viralLoad > 100) {
        return "Low"
    } else {
        return "Very low"
    }
}
function convertRiskToRiskColor(risk){
    return {
        "Very high": "red",
        "High": "red",
        "Medium": "orange",
        "Low": "green",
        "Very low": "green",
    }[risk];
}

function recalculateScores(){
    var myString = "";
    var viralLoad = 1;
    
    for(question_name in survey.data){
        var parsed_result = Number.parseFloat(survey.data[question_name]);
        myString += question_name+":"+survey.data[question_name]+":"+typeof(parsed_result)+":"+isNaN(parsed_result)+":"+String(survey.data[question_name]).search(/[^\d\.]/)+"<br>";
        
        if( isNaN(parsed_result) | (String(survey.data[question_name]).search(/[^\d\.]/) != -1) ){
            myString += question_name+":"+survey.data[question_name]+":"+typeof(parsed_result)+":"+isNaN(parsed_result)+"<br>";

            var questions = surveyJSON.pages[0].elements;
            var question_index = _.findIndex(questions, function(o){ return o.name == question_name });
            
            var question = questions[question_index];
            var answer_index = _.findIndex(question.rateValues, function(o){ return o == survey.data[question_name] });
            var score_value = question.rateValuesScores[answer_index];
            
            viralLoad = viralLoad*score_value;
        } else {
            viralLoad = viralLoad*parsed_result;
        }   
    }

    var risk = convertViralLoadToRisk(viralLoad);
    var riskColor = convertRiskToRiskColor(risk);
    
    $("#scoreContainer-risk")
        .html(risk)
        .css({
            border: "8px solid "+riskColor,
            color: riskColor,
        })
    $("#scoreContainer-viralload").html(Math.trunc(viralLoad));//+"<br>"+myString);
}

var survey = new Survey.Model(surveyJSON);
survey.onValueChanged.add(function(survey, options) {
  recalculateScores()
  if(!options.question) return;
  options.question.hasErrors(true);
});


$("#surveyContainer").Survey({
    model:survey,
    onComplete:sendDataToServer
});

$(".panel-footer").hide();
recalculateScores();

$("#exampleModal").modal();