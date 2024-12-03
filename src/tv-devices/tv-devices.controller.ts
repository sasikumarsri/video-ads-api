import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TVDevicesService } from './tv-devices.service';
import {
  CreateTVDeviceDto,
  TVDeviceResponseDto,
  UpdateTVDeviceDto,
} from 'src/dto/tv-devices.dto';

@ApiTags('TV Devices')
@Controller('tv-devices')
export class TVDevicesController {
  constructor(private readonly tvDevicesService: TVDevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new TV device' })
  @ApiResponse({ status: 201, type: TVDeviceResponseDto })
  create(@Body() createTVDeviceDto: CreateTVDeviceDto) {
    return this.tvDevicesService.create(createTVDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all TV devices' })
  @ApiResponse({ status: 200, type: [TVDeviceResponseDto] })
  findAll() {
    return this.tvDevicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a TV device by ID' })
  @ApiResponse({ status: 200, type: TVDeviceResponseDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tvDevicesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a TV device by ID' })
  @ApiResponse({ status: 200, type: TVDeviceResponseDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTVDeviceDto: UpdateTVDeviceDto,
  ) {
    return this.tvDevicesService.update(id, updateTVDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a TV device by ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tvDevicesService.remove(id);
  }

  @Get('getDevice/:id')
  @ApiOperation({ summary: 'Get a TV device by ID' })
  @ApiResponse({ status: 200, type: TVDeviceResponseDto })
  getDeviceByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.tvDevicesService.getDevicesByUserId(id);
  }
}
