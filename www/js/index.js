/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.getElementById("myBtn").addEventListener("click", this.onTouch, false);
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        $("#gem-img").attr("src","img/grey-round.png");
    },

    onTouch: function(){
        function successCallback(bpm){
            if (bpm <= 55){
                $("#myBtn").empty().text("Your Mood:" + "You are sad. I'm sorry to hear that");
                $("#gem-img").attr("src","img/blue-round.png");
            }
            else if (bpm >= 55 && bpm < 65) {
                $("#myBtn").empty().text("Your Mood:" + "You seem skeptical, what? this is totally legit");
                $("#gem-img").attr("src","img/orange-round.png");
            }
            else if (bpm >= 65 && bpm <85) {
                $("#myBtn").empty().text("Your Mood:" + "You are happy. Good to hear");
                $("#gem-img").attr("src","img/pink-round.png");
            }
            else if (bpm >= 85 && bpm <120) {
                $("#myBtn").empty().text("Your Mood:" + "You are very excited, I know, i'm excited too");
                $("#gem-img").attr("src","img/green-round.png");
            }
        }

        function errorCallback(){
            var bpm = 70;
           /* if (bpm >= 65 && bpm <85) {
                $("#myBtn").empty().text("Your Mood:" + "You are happy. Good to hear");
                $("#gem-img").attr("src", "img/pink-round.png");
            }*/
           alert("Unable to detect mood");
        }

        var props = {
            seconds: 10,
            fps: 30
        };

        heartbeat.take(props, successCallback, errorCallback);

    }
};

app.initialize();






/*$("#mood-text").empty().text("Your Mood:" + "");*/

/*
function test(){
    $("#mood-text").empty().text("HEY, HI HELLO");
}
setTimeout(test, 2000);
*/

/*
/!*(bpm <= 55)*!/ less than or equal to 55
   (bpm >= 55 && <65)*!/ greater than 55 and less than 65?


 x >= y               # x is greater than or equal to y
 x <= y               # x is less than or equal to y
*/
