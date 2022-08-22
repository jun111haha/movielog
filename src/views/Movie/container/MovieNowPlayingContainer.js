import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import useIntersect from "../../utils/userIntersect";
import MoviePresenter from "./MoviePresenter";
import useStores from "../../store/useStores";
