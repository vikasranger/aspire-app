import {TabPanel} from "@mui/lab";
import {TabContext} from "@mui/lab";
import {Tab} from "@mui/material";
import {Tabs} from "@mui/material";
import {Box} from "@mui/material";
import React from "react";
import {useState} from "react";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";

export interface ITab
{
  id: string;
  label: string;
  content: React.ReactNode;
}

export default function TabList(props: {
  tabList: ITab[];
  defaultTab?: string;
  contentPadding?: number;
  tabsBottomMargin?: number;
})
{
  const {
    tabList,
    defaultTab,
    tabsBottomMargin
  } = props;
  const [value, setValue] = useState(defaultTab ?? tabList[0].id);
  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
  {
    console.log("TabList.handleChange newValue:", event, newValue);
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowY: "auto",
          flexGrow: 1,
          boxSizing: "border-box",
          flexDirection: "column"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            marginBottom: px(tabsBottomMargin ?? Theme.gap.std)
          }}
        >
          {
            tabList.map((tab) =>
            {
              return (
                <Tab
                  key={tab.id}
                  value={tab.id}
                  label={tab.label}
                  sx={{
                    textTransform: "none",
                    padding: 0,
                    marginRight: px(Theme.gap.xStd)
                  }}
                />
              );
            })
          }
        </Tabs>
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            overflowY: "auto",
            boxSizing: "border-box"
          }}
        >
          {tabList.map((tab) =>
          {
            return (
              <TabPanel
                key={tab.id}
                value={tab.id}
                sx={{
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: px(props.contentPadding ?? 0)
                }}
              >
                {tab.content}
              </TabPanel>
            );
          })}
        </Box>

      </Box>
    </TabContext>
  );
}
