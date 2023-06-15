export const MOCKDATA = [
    {
		"name": "eq5dHeader",
		"type": "introduction",
		"label": "EQ-5D-5L",
		"description": "Health Questionnaire English version for the UK"
	},
	{
		"name": "mobility",
		"type": "choice",
		"label": "MOBILITY",
		"instructions": "Please select the ONE box that best describes your health TODAY.",
		"options": [
			{
				"value": 1,
				"display": "I have no problems in walking about"
			},
			{
				"value": 2,
				"display": "I have slight problems in walking about"
			},
			{
				"value": 3,
				"display": "I have moderate problems in walking about"
			},
			{
				"value": 4,
				"display": "I have severe problems in walking about"
			},
			{
				"value": 5,
				"display": "I am unable to walk about"
			}
		]
	},
	{
		"name": "healthVas",
		"type": "vas",
		"label": "<ul><li>We would like to know how good or bad your health is TODAY.</li><li>You will see a scale numbered 0 to 100.</li><li>100 means the best health you can imagine.</li><li>0 means the best health you can imagine.</li><li>Please indicate on the scale how your health is TODAY</li></ul>",
		"isLabelHtml": true,
		"minValue": 0,
		"maxValue": 100,
		"stepSize": 1,
		"minText": "The worst health you can imagine",
		"maxText": "The best health you can imagine"
	}
]