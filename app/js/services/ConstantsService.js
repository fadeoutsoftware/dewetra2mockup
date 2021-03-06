/**
 * Created by p.campanella on 27/01/14.
 */

'use strict';
angular.module('dewetra.ConstantsService', []).
    service('ConstantsService', [function () {
        this.APIURL = 'http://93.62.155.217:8080/Omirl/rest';

        this.m_bUserLogged = false;
        this.m_oUser = null;
        this.m_sReferenceDate = "";

        this.m_oMapCenter = null;
        this.m_oMapZoom = null;

        this.getMapCenter = function() {
            return this.m_oMapCenter;
        }

        this.getMapZoom = function() {
            return this.m_oMapZoom;
        }

        this.setMapCenter = function(oCenter) {
            this.m_oMapCenter = oCenter;
        }

        this.setMapZoom = function(oZoom) {
            this.m_oMapZoom = oZoom;
        }

        this.getAPIURL = function() {
            return this.APIURL;
        }
        this.isUserLogged = function() {
            return this.m_bUserLogged;
        }

        this.setUser = function(oUser) {

            this.m_bUserLogged = false;

            this.m_oUser = oUser;
            if (oUser != null)
            {
                if (oUser.isLogged == true)
                {
                    this.m_bUserLogged = true;
                }
            }
        }

        this.getUser = function() {
            return this.m_oUser;
        }

        this.getSessionId = function() {
            if (this.m_oUser != null)
            {
                if (angular.isDefined(this.m_oUser.sessionId)) return this.m_oUser.sessionId;
            }

            return "";
        }

        this.setReferenceDate = function(sDate) {
            this.m_sReferenceDate = sDate;
        }

        this.getReferenceDate = function() {
            if (this.m_sReferenceDate !=null) return this.m_sReferenceDate;
            else return "";
        }

        this.pad = function (number, length){
            var str = "" + number;
            while (str.length < length) {
                str = '0'+str;
            }
            return str;
        }

        this.getTimezoneOffset  = function () {
            var offset = new Date().getTimezoneOffset()
            offset = ((offset<0? '+':'-')+ // Note the reversed sign!
                this.pad(parseInt(Math.abs(offset/60)), 2)+
                this.pad(Math.abs(offset%60), 2));

            return offset;
        }

        this.getReferenceDateString = function()
        {
            if (this.m_sReferenceDate == null) return "";
            if (this.m_sReferenceDate == "") return "";


            var oYear = this.m_sReferenceDate.getFullYear();
            var oMonth = this.m_sReferenceDate.getMonth() + 1;
            var oDay = this.m_sReferenceDate.getDate();
            var oHour = this.m_sReferenceDate.getHours();
            var oMin = this.m_sReferenceDate.getMinutes();

            if (oMonth<10)
            {
                oMonth = "0"+oMonth;
            }

            if (oDay<10)
            {
                oDay = "0"+oDay;
            }

            if (oHour<10)
            {
                oHour = "0"+oHour;
            }

            if (oMin<10)
            {
                oMin = "0"+oMin;
            }

            var sDateString = oYear+"-"+oMonth+"-" + oDay + 'T' + oHour + ':' + oMin + ':00.000' + this.getTimezoneOffset();

            return sDateString;
        }
    }]);