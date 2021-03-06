/*
This file forms part of the NHS Choices Heart Age Tool.
It is ©2014 NHS Choices.
It is released under version 3 of the GNU General Public License
Source code, including a copy of the license is available at https://github.com/Antbits/heartage

It contains code derived from http://qrisk.org/lifetime/QRISK-lifetime-2011-opensource.v1.0.tgz released by ClinRisk Ltd.
*/
function Q65_male_death(){
	var self = this
	this.death = function(form_data){
		for(var i in form_data){
			eval('var '+i+' = '+form_data[i])
		}
		var a;
		var Iethrisk = new Array(
			0,
			0,
			-0.7959493840935216700000000,
			-0.8983542916653508600000000,
			-0.8464836394282484500000000,
			-1.3907364202494530000000000,
			-0.7939585494106227200000000,
			-0.6696772151327180500000000,
			-1.3074649266863319000000000,
			-1.0983395480170892000000000
		);
		var Ismoke = new Array(
			0,
			0.2306667408386281800000000,
			0.5716670855343914900000000,
			0.7849316319893276900000000,
			1.0119244230108204000000000
		);
		a=0;
		a += Iethrisk[ethrisk];
		a += Ismoke[smoke_cat];
		a += (Math.log(bmi/10) - 0.967572152614594) * -0.4077463700204617700000000;
		a += (rati - 4.439734935760498) * -0.0137508433127115260000000;
		a += (sbp - 133.265686035156250) * 0.0005828619709622257200000;
		a += (town + 0.164980158209801) * 0.0509394028862269410000000;
		a += b_AF * 0.4141766179931511400000000;
		a += b_ra * 0.4757132805164633300000000;
		a += b_renal * 0.8498597130356305700000000;
		a += b_treatedhyp * 0.0722059208073983630000000;
		a += b_type2 * 0.4918060293979553700000000;
		a += fh_cvd * -0.3664212379436541700000000;
		return a;
	}
}