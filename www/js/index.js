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
        $("#gem-img").attr("src","img/grey-gem.png");
    },

    onTouch: function(){
        function successCallback(bpm){
            if (bpm <= 55){
                $("#myBtn").empty().text("Your Mood: " + "You are sad. I'm sorry to hear that");
                $("#gem-img").attr("src","img/blue-gem.png");
            }
            else if (bpm >= 55 && bpm < 68) {
                $("#myBtn").empty().text("Your Mood: " + "Your aloof, and that's OK");
                $("#gem-img").attr("src","img/purple-gem.png");
            }
            else if (bpm >= 68 && bpm <81) {
                $("#myBtn").empty().text("Your Mood: " + "You seem skeptical, what? this is totally legit");
                $("#gem-img").attr("src","img/yellow-gem.png");
            }
            else if (bpm >= 81 && bpm <94) {
                $("#myBtn").empty().text("Your Mood: " + "You are happy. Good to hear");
                $("#gem-img").attr("src","img/green-gem.png");
            }
            else if (bpm >= 94 && bpm <107) {
                $("#myBtn").empty().text("Your Mood: " + "You are very excited, I know, i'm excited too");
                $("#gem-img").attr("src","img/pink-gem.png");
            }
            else if (bpm >= 107 && bpm <120) {
                $("#myBtn").empty().text("Your Mood: " + "You are angry. That sucks, sorry if this app made you angry");
                $("#gem-img").attr("src","img/orange-gem.png");
            }
        }

        function errorCallback(){
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


