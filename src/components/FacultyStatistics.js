import { DataGrid } from '@mui/x-data-grid';
import { Typography, Paper } from '@mui/material';
import { BLUE } from '../util/Consts';
import CanvasJSReact from '../lib/canvasjs.react';

const FacultyStatistics = ({ posts }) => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const currentAdvisorStats = posts.reduce((stats, { advisor, memberList }) => {
        if (!stats[advisor]) stats[advisor] = [];
        stats[advisor].push(memberList);

        return stats;
    }, {});

    const currentSoftwareStats = posts.reduce((stats, { softwareList }) => {
        if (softwareList !== undefined && softwareList.length !== 0) {
            softwareList.forEach(software => {
                if (!stats[software]) stats[software] = 0;
                stats[software]++;
            });
        }

        return stats;
    }, {});

    var id = 1;
    var rows = [];
    for (const advisor in currentAdvisorStats) {
        rows.push({
            'id': ++id,
            'Advisor': advisor,
            'Projects Currently Advised': currentAdvisorStats[advisor].length,
            'Students Currently Advised': currentAdvisorStats[advisor].reduce((sum, members) => sum + members.length, 0)
        })
    }

    var barDisplay = [];
    var max = 0;
    for (const software in currentSoftwareStats) {
        barDisplay.push({
            label: software,
            y: currentSoftwareStats[software]
        });
        if (currentSoftwareStats[software] > max) max = currentSoftwareStats[software];
    }

    const options = {
        axisX: { interval: 1, labelFontSize: 14, labelFontFamily: "Roboto" },
        axisY: { interval: max > 10 ? null : 1, labelTextAlign: "right", labelFontSize: 14, labelFontFamily: "Roboto" },
        data: [{ type: "column", axisYType: "primary", dataPoints: barDisplay.sort(sortDps()) }],
        width: barDisplay.length * (barDisplay.length < 4 ? 200 : 100)
    }
    function sortDps() {
        return function (a, b) {
            if (a.label < b.label) {
                return -1;
            } else if (a.label > b.label) {
                return 1;
            } else {
                return 0;
            }
        }
    }


    return <>
        <Typography variant="h4" gutterBottom fontWeight={'meduim'} color={BLUE} marginLeft={'5px'}>
            Advisor Stats
        </Typography>
        <Paper elevation={5} sx={{ height: '75vh', width: '100%' }}>
            <DataGrid
                columns={[
                    {
                        field: 'Advisor', flex: 1, minWidth: 700, renderHeader: () => (
                            <Typography fontWeight={'bold'}>Advisor</Typography>
                        ),
                    },
                    {
                        field: 'Projects Currently Advised', flex: .2, minWidth: 280, renderHeader: () => (
                            <Typography fontWeight={'bold'}>Projects Currently Advised</Typography>
                        ),
                    },
                    {
                        field: 'Students Currently Advised', flex: .2, minWidth: 280, renderHeader: () => (
                            <Typography fontWeight={'bold'}>Students Currently Advised</Typography>
                        ),
                    }
                ]}
                rows={rows}
            />
        </Paper>

        <Typography variant="h4" gutterBottom fontWeight={'meduim'} color={BLUE} marginLeft={'5px'} marginTop={'30px'}>
            Software Stats
        </Typography>
        <Paper elevation={5} sx={{ padding: 1, 'overflow-x': "scroll" }}>
            < CanvasJSChart options={options} />
        </Paper>
    </>

}

export default FacultyStatistics;