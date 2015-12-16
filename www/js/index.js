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
    },

    onTouch: function(){
        function successCallback(bpm){
            if (bpm <= 55){
                $("#mood-text").empty().text("Your Mood:" + "Sad");
            }
            else if (bpm >= 55 <65) {
                $("#mood-text").empty().text("Your Mood:" + "Skeptical");
            }
            else if (bpm >= 65 <85) {
                $("#mood-text").empty().text("Your Mood:" + "Happy");
            }
            else if (bpm >= 85 <120) {
                $("#mood-text").empty().text("Your Mood:" + "Excited");
            }

        }

        function errorCallback(){
            alert("No mood detected");
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
