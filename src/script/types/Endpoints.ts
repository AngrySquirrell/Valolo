import { languages } from "./LanguageType";

export type EndpointModel =
    | {
          root: "agents";
          params?: {
              uuid?: string;
          };
          parameters?: {
              isPlayableCharacter?: boolean;
              language?: languages;
          };
      }
    | {
          root: "buddies";
          subRoot?: "levels";
          params?: {
              uuid?: string;
              levelUuid?: string;
          };
      }
    | {
          root: "bundles";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "ceremonies";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "competitivetiers";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "contenttiers";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "contracts";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "currencies";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "events";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "gamemodes";
          subRoot?: "equippable";
          params?: {
              uuid?: string;
              equippableUuid?: string;
          };
      }
    | {
          root: "gear";
          params: {
              uuid?: string;
          };
      }
    | {
          root: "levelborders";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "maps";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "playercards";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "playertitles";
          params?: {
              uuid?: string;
          };
      }
    | {
          root: "seasons";
          subRoot?: "competitive";
          params?: {
              uuid?: string;
              competitiveUuid?: string;
          };
      }
    | {
          root: "sprays";
          subRoot?: "levels";
          params?: {
              uuid?: string;
              levelsUuid?: string;
          };
      }
    | { root: "themes"; params?: { uuid?: string } }
    | {
          root: "weapons";
          subRoot?: "skins";
          params?: { uuid?: string; skinUuid?: string };
      }
    | { root: "version"; params?: { uuid?: string } };
